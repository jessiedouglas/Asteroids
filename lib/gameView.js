(function () {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (canvasEl) {
    this.ctx = canvasEl.getContext("2d");
    this.game = new Asteroids.Game(canvasEl.width, canvasEl.height);
  };

  GameView.prototype.start = function () {
    this.bindKeyHandlers();
    window.setInterval((function () {
      this.game.step();
      this.game.draw(this.ctx);
    }).bind(this), 20);
  };

  GameView.prototype.bindKeyHandlers = function () {
    var gameview = this;
    key('up', function () {
      gameview.game.ship.power([0, -5]);
    });

    key('down', function () {
      gameview.game.ship.power([0, 5]);
    });

    key('left', function () {
      gameview.game.ship.power([-5, 0]);
    });

    key('right', function () {
      gameview.game.ship.power([5, 0]);
    });
    key('space', function () {
      gameview.game.ship.fireBullet();
    });

  };
})();