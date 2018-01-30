function countdown(callback) {
    window.setTimeout(callback, 2000);
}

function createMultiplier(a) {
    return function(multiplierValue) {
        return multiplierValue * a;
    }
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(a,b) {
    return a*b;
}

var doublerWithBind = multiplier.bind(null,2);
var triplerWithBind = multiplier.bind(null,3);
