function countdown(callback) {
    window.setTimeout(callback, 2000)
}

function createMultiplier(factor){
  return function(number){
    return factor * number
  }
}

var doubler = createMultiplier(2)

var tripler = createMultiplier(3)

function multiplier(x, y){
  return x * y
}
function doublerWithBind(){
   return multiplier.bind(null, 2)
}
function triplerWithBind() {
  return multiplier.bind(null, 3)
}
