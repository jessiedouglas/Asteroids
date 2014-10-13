(function () {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }




  var Asteroid = Asteroids.Asteroid = function (options) {
    var args = {
      color: Asteroid.COLOR,
      radius: Asteroid.RADIUS,
      pos: options["pos"],
      vel: Asteroid.randomVel(),
      game: options["game"]
    };
    Asteroids.MovingObject.call(this, args);
  };

  Asteroid.COLOR = "red";
  Asteroid.RADIUS = 10

  Asteroids.Util.inherits(Asteroids.MovingObject, Asteroid);

  Asteroid.randomVel = function () {
   var dx = Math.floor(Math.random() * 9 + 1);

   var dy =  Math.floor(Math.random() * 9 + 1);

   var negx = Math.random();
   var negy = Math.random();

   if (negx < 0.5) {

     dx = dx * -1;
   }

   if (negy < 0.5) {
     dy = dy * -1;
   }
   return [dx, dy];
  };

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
  };

})();



