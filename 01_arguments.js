var sum = function() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  };
  return sum;
};

Function.prototype.myBind = function (obj) {
  var args = Array.prototype.slice.call(arguments, 1);
  var fn = this;

  return function () {
    return fn.apply(obj, args);
  };
};

var Cat = function (name) {
  this.name = name;
};

Cat.prototype.sayName = function (thing) {
  console.log("Hello, " + this.name + thing);
};

var abbott = new Cat("abbott");

// curriedSum

var curriedSum = function(numArgs) {
  var numbers = [];
  var _curriedSum = function(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      var total = 0;
      for (var i = 0; i < numArgs; i++){
        total += numbers[i];
      };

      return total
    } else {
      return _curriedSum;
    };
  };

  return _curriedSum
};

Function.prototype.curry = function (numArgs) {
  var args = [];
  var fn = this;

  var _curriedfn = function (arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return _curriedfn;
    }
  };

  return _curriedfn;
};
