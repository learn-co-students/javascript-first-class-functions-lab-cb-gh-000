function countdown(callback) {
  window.setTimeout(callback(), 2000);
}

var doubler = function(n) {
  return (n*2);
}

var tripler = function(n) {
  return (n*3);
}

function multiplier(n, multiplier) {
  return (n*multiplier);
}

var doublerWithBind = doubler.bind(null, 2);
var doublerWithBind = doubler.bind(null, 3);
