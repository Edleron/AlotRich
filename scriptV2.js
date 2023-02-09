const data = new Map();

// Set Map Values
// data.set(1, [2, 5, 15, 27, 33, 45]);
// data.set(2, [3, 5, 15, 27, 33, 45]);
// data.set(3, [4, 5, 15, 27, 33, 45]);

let combination = fCombination(7, 6)
console.log(combination);


for (let value = 6; value > 0; value--) {
    data.set((value), [0, 0, 0, 4, 5, value])
}
console.log(data);




function fCombination(n, r) {
    return fFact(n) / (fFact(r) * fFact(n - r));
}

function fFact(num) {
    var rval = 1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}