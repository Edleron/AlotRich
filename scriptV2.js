const data = new Map();

// Set Map Values
// data.set(1, [2, 5, 15, 27, 33, 45]);
// data.set(2, [3, 5, 15, 27, 33, 45]);
// data.set(3, [4, 5, 15, 27, 33, 45]);

let combination = fCombination(5, 3)
console.log(combination);

let n = 5;
let r = 3;

for (let value = 1; value <= 10; value++) {
    data.set((value), [divideOne(value), value + 2, value + 3])
}
console.log(data);


function divideOne(input) {
    if (input < r) {

    }
}



function fCombination(n, r) {
    return fFact(n) / (fFact(r) * fFact(n - r));
}

function fFact(num) {
    var rval = 1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}