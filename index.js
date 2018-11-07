function countdown(callback){
  window.setTimeout(2000);
  callback();
}

function createMultiplier(multiplierValue){

}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);
function multiplier(a, b){
  return a*b;
}
