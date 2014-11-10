(function () {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  var Ship = Asteroids.Ship = function (options) {

    var args = {
      game: options["game"],
      pos: options["pos"],
      vel: [0, 0],
      radius: Ship.RADIUS,
      color: Ship.COLOR
    };

    Asteroids.MovingObject.call(this, args);

  };

  Asteroids.Util.inherits(Asteroids.MovingObject, Ship);

  Ship.COLOR = "blue";
  Ship.RADIUS = 7;

  Ship.prototype.relocate = function () {
    this.pos = Asteroids.Game.randomPosition(this.game.dim_x, this.game.dim_y);
    this.vel = [0, 0];
  };

  Ship.prototype.power = function (impulse) {
    var xvel = this.vel[0];
    var yvel = this.vel[1];

    if (Math.abs(this.vel[0] + impulse[0]) <= 10) {
      xvel = this.vel[0] + impulse[0];
    }
    if (Math.abs(this.vel[1] + impulse[1]) <= 10) {
      yvel = this.vel[1] + impulse[1];
    }

    this.vel = [xvel, yvel];
  };

  Ship.prototype.fireBullet = function () {
    var bvel = this.vel
    if (bvel[0] === 0 && bvel[1] === 0) {
      bvel = [0, -5];
    }
    bullet = new Asteroids.Bullet ({
      pos: this.pos,
      vel: bvel,
      game: this.game
    });

    this.game.bullets.push(bullet);
  };

})();