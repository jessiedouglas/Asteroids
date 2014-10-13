(function () {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = function () {};


  Util.prototype.inherits = function (Parent, Child) {
    function Surrogate() {};
    Surrogate.prototype = Parent.prototype;
    Child.prototype = new Surrogate();
  };




});