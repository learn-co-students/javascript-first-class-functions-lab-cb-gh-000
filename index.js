function createMultiplier(multiplierValue) {
  return (given) => {
    return given * multiplierValue;
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function countdown(callback)  {
  window.setTimeout(callback, 2000);
}

function multiplier(multiplierValue, value) {
   return multiplierValue * value;
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
