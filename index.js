function countdown(callback) {
  window.setTimeout(() => callback(), 2000)
}

function createMultiplier(multiplierValue) {
  return (number) => number * multiplierValue
}

function multiplier(firstValue, secondValue) {
  return firstValue * secondValue
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
