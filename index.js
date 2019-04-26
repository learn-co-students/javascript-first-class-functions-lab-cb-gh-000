function countdown(callback)
{
  setTimeout(callback, 2000)
}

function createMultiplier(mult)
{
  return ((mult, n) => {return mult * n})
}

var double = createMultiplier(2)
console.log(double())
