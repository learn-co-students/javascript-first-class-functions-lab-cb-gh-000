function countdown(callback) {
  window.setTimeout(function() {
    callback();
  }, 2000);
}

function createMultiplier(multiplierValue) {
  return function(x) {
    return x * multiplierValue;
  };
}

function multiplier(a, b) {
  return a * b;
}

var doubler = createMultiplier(2);
var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);

