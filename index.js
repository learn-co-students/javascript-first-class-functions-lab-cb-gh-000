function countdown(callback) {
  window.setTimeout(callback);
}

function createMultiplier(number) {
  return function(value) {
    return number * value;
  }
}

const doubler = createMultiplier(2);
const tripler = createMultiplier(3);

function multiplier(x, y) {
  return x * y;
}

const doublerWithBind = multiplier.bind(null, 2);
const triplerWithBind = multiplier.bind(null, 3);
