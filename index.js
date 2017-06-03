function countdown(callback) {
  window.setTimeout(() => callback(), 2000)
}

function createMultiplier(multiplierValue) {
  return (number) => number * multiplierValue
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)
