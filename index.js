function countdown(callback){
  window.setTimeout(callback,2000);
}
function createMultiplier(multiplierValue){

}
function multiplier(multiplierValue,value){
  return multiplierValue*value;
}
function doublerWithBind(){
  return multiplier.bind(2);
}
