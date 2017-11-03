function countdown(vocals){
    window.setTimeout(vocals, 2000)
}

function createMultiplier(multiplierValue){
  return function(value){
    return value * multiplierValue
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(value, multiplierValue){

}

var doublerWithBind = multiplier.bind(this, 2)
var triplerWithBind = multiplier.bind(this, 2)
