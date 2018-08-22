function countdown(callback) {
  window.setTimeout(() => {
    callback()
    }, 2000);
  
}

function createMultiplier(multiplierValue) {
  return function(value) {
    return multiplierValue * value;
  }
}

function multiplier(num1, num2) {
  return num1 * num2;
}

doubler = createMultiplier(2);
tripler = createMultiplier(3);

doublerWithBind = multiplier.bind(null, 2);
triplerWithBind = multiplier.bind(null, 3);