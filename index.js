function countdown(callback) {
  setTimeout(callback, 2000);

}

function createMultiplier(multiplierValue) {
  return function (n) {
    return n * multiplierValue
  }
}

// let createMultiplierBonus = createMultiplier
// pretty sure this is what's needed here.
let doubler = createMultiplier(2)
let tripler = createMultiplier(3)

function multiplier(multiplierValue, value) {
  return multiplierValue * value
}

let doublerWithBind = multiplier.bind(null, 2)

// console.log(doublerWithBind(3))
