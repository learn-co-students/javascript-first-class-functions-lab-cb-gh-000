function countdown(callback) {
  window.setTimeout(callback, 20)
}

function createMultiplier(n) {
  return (m) => {
    return n * m
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(a, b) {
  return a * b
}

function doublerWithBind(a) {
  multiplier.bind(null, multiplier(a, 2))
}

function triplerWithBind(a) {
  multiplier.bind(null, multiplier(a, 3))
}
