function countdown(cb) {
  window.setTimeout(cb, 2000);
}

function createMultiplier(num) {
  return (x) => x * num;
}

var doubler = createMultiplier(2);

var tripler = createMultiplier(3);

function multiplier(val1, val2) {
  return val1 * val2;
}

var doublerWithBind = multiplier.bind(null, 2);

var triplerWithBind = multiplier.bind(null, 3);
