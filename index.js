function countdown(callback){
 return setTimeout(callback,2000);
}
function createMultiplier(multiplierValue){
  return function (number){
    return multiplierValue * number
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(a, b) {
  return a * b;
}
function doublerWithBind(num) {
  return _.bind(multiplier, null, num);
}
doublerWithBind(2);
function triplerWithBind(num){
  return  _.bind(multiplier, null, num);
}
triplerWithBind(3);
