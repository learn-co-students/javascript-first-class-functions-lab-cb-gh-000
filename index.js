//We'll start things off by creating a `countdown()` function. This function takes one argument, `callback`, which is a function. Using `window.setTimeout()`, we will wait two seconds before calling the `callback` function that was passed into the `countdown()` function. This exercise demonstrates the use of callbacks for async operations. If we didn't use a callback, our program would continue right away instead of waiting for the callback to be called.

function countdown(callback){
  window.setTimeout(() => callback() , 2000);
}

function createMultiplier(multiplierValue){
  return (number) => number * multiplierValue);
}

function multiplier(val1, val2){
  return val1 * val2;
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
