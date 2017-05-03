function countdown(callback) {
    setTimeout(function() {
        callback();
    }, 2000);
}

function createMultiplier(multiplierValue) {
    return function(number){return number * multiplierValue;};
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(n1, n2) {
    return a * b;
}

var doublerWithBind = multiplier.bind(null,2);
var triplerWithBind = multiplier.bind(null,3);
