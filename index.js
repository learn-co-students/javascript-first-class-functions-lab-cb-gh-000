function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(n) {
  return function(num) {
    return num * n
  }
}

function doubler(n) {
  var multipliers = createMultiplier(2)
  return multipliers(n)
}

function tripler(n) {
  return createMultiplier(3)(n)
}

function multiplier(x, y) {
  return x * y
}

function doublerWithBind() {
  return multiplier.bind(null, 2)
}

function triplerWithBind() {
  return multiplier.bind(null, 3)
}
