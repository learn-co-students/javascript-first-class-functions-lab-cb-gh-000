function countdown(callback) {
  window.setTimeout(() => {
    callback()
    }, 2000);
  
}

function createMultiplier(multiplierValue) {
  return function() {
    return multiplierValue;
  }
}

doubler = function (number) {
  return createMultiplier(2) * number
}
tripler = function(number) {
  return createMultiplier(3) * number
}