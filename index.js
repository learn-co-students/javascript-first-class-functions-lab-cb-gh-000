function countdown( callback ) {
    window.setTimeout( callback(), 200)
}

function createMultiplier(multiplierValue) {
  return function() {
    return 5 * multiplierValue
  }
}

var doubler = createMultiplier(2)
doubler()

var tripler = createMultiplier(3)
tripler()

function multiplier(multiplierValue, value) {
  return multiplierValue * value
}

var doublerWithBind = multiplier.bind(null)

doublerWithBind(2, 5)

var triplerWithBind = multiplier.bind(null)

triplerWithBind(3, 5)
