/*
We'll start things off by creating a countdown() function.
This function takes one argument, callback, which is a function.
Using window.setTimeout(), we will wait two seconds before calling the callback function that was passed into the countdown() function.

This exercise demonstrates the use of callbacks for async operations.
If we didn't use a callback, our program would continue right away instead of waiting for the callback to be called.

*/

function countdown(callback) {
  window.setTimeout(() => {
    callback()
  }, 2000)
}

/*
Let's say we're trying to recreate Scrabble in JavaScript.
Some board tiles can give us double or triple letter score.

 Let's create a helper function that takes a number (let's call it the multiplierValue).
 This function then returns a function that multiplies a given value by the multiplierValue.
 In your code, do the following:

- Create a createMultiplier() function. Make sure it returns the right thing!
- Create a doubler variable that uses the createMultiplier() function to create a function that doubles any given number.
- Create a tripler variable that does the same thing as the doubler, but it triples the value instead.

*/

function doubler(input) {
  return input * 2
}

function tripler(input) {
  return input * 3
}

function createMultiplier(multiplierValue) {
  if (multiplierValue === 2) {
    return doubler
  } else if (multiplierValue === 3) {
    return tripler
  }
}

/*

Instead of a function returning another function (like we did in the previous exercise), we can also write a function that takes two values right away: the multiplierValue and the value.
However, we can't create the doubler and tripler functions by just calling this new function with two arguments!
The trick is to partially apply the function.
 We can do this using .bind(). Q

 uick hint: you can forget about .bind()'s first argument (the this context) for now — you can use null as its value.

To pass all tests, do the following:

- Create a multiplier() function that takes two arguments and multiplies them together.
- Create a doublerWithBind variable that partially applies the multiplier() function by passing in 2 as its first argument.
- Create a triplerWithBind variable that partially applies the multiplier() function by passing in 3 as its first argument.

*/

function multiplier(multiplierValue, value) {
  if (multiplierValue === 2) {
    return doublerWithBind(2, value).bind(multiplier)
  } else if (multiplierValue === 3) {
    return triplerWithBind(3, value).bind(multiplier)
  }
}

function doublerWithBind(multiplierValue, value) {
  return input * 2
}

function triplerWithBind(multiplierValue, value) {
  return input * 3
}
