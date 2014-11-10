(function () {

  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = function () {};


  Util.inherits = function (Parent, Child) {
    function Surrogate() {};
    Surrogate.prototype = Parent.prototype;
    Child.prototype = new Surrogate();
  };




})();