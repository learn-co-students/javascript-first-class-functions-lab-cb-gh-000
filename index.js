function countdown(callback){
  window.setTimeout(2);
  callback();
}

function createMultiplier(multiplierValue){
  return val => val * multiplierValue;
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(multiplierValue, value){
  return multiplierValue * value;
}


var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
