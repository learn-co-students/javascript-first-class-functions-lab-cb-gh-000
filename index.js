function countdown(cb) {
  setTimeout(() => {
    cb();
  }, 2000);
};

function multiplier(a, b) {
  return a * b;
}

const createMultiplier = (multiplierValue) => {
  return function (value) => {
    return value * multiplierValue;
  };
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
