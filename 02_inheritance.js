Function.prototype.inherits = function (parent) {
  function Surrogate() {};
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
};

function MovingObject () {};

function Ship () {};
Ship.inherits(MovingObject);

function Asteroid () {};
Asteroid.inherits(MovingObject);

MovingObject.prototype.move = function () {
  console.log("Move");
};

Asteroid.prototype.explode = function () {
  console.log("Boom!");
};

