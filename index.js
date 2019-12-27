function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
  return ((value) => {
    return value * multiplierValue;
  });
}

const doubler = createMultiplier(2);
const tripler = createMultiplier(3);

function multiplier(multiplierValue, value) {
  return multiplierValue * value;
}

const doublerWithBind = multiplier.bind(null, 2);
const triplerWithBind = multiplier.bind(null, 3);
