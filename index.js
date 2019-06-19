function countdown(callback){
    window.setTimeout(callback(), 2000)
}

function createMultiplier(multiplierValue){
    return () =>  multiplierValue*6
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)
