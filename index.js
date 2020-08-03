function countdown(callback)
{
  setTimeout(callback, 2000)
}

function createMultiplier(mult)
{
  return ((n) => {return mult * n})
}

var double = createMultiplier(2)
var triple = createMultiplier(3)
console.log(double(5))
console.log(triple(10))

function multiplier(a, b) {
  return a * b;
}

var doublerWithBind = multiplier.bind(null, 2, 3, 4);
var triplerWithBind = multiplier.bind(null, 3);

console.log(doublerWithBind())
