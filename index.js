function countdown(callback){
  window.setTimeout(callback, 2000)
}

function createMultiplier(n){
  return function(i){
    return i * n
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(n, m){
  return n*m
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)