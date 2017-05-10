function countdown(callback) {
  window.setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue) {
  return (number) => {
    return multiplierValue * number;
  };
}

let doubler = createMultiplier(2);
let tripler = createMultiplier(3);

doubler(3);

function multiplier(multiplierValue, value) {
  return multiplierValue * value;
}

let doublerWithBind = multiplier.bind(2, null);
let triplerWithBind = multiplier.bind(3, null);