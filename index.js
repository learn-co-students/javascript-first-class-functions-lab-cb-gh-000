function countdown(callback) {
  window.setTimeout(callback , 2000);
}

function createMultiplier(multiplierValue) {
  return function (n) {
    return n * multiplierValue;
  }
}

function doubler(n) {
  return createMultiplier(2)(n);
}

function tripler(n) {
  return createMultiplier(3)(n);
}

function multiplier(x, y) {
  return x * y;
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
