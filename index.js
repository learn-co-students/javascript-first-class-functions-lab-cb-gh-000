
// Set timeout halts execution for half a second before calling the callback function.
function countdown (callback){
  window.setTimeout(callback, 500);
}
function callback (){
  console.log("tick");
}

// Inline lambda function version of the above function
function countdownInline (){
  window.setTimeout(() => console.log("tick"), 10000);
}

function createMultiplier(multiplierValue){
  return function multiplier (tileValue){
    let total = multiplierValue * tileValue;
    console.log(total);
  }
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier (multiplierValue, tileValue){
  return multiplierValue * tileValue
}

doublerWithBind = multiplier.bind(null,2);
triplerWithBind = multiplier.bind(null, 3);
