let arr = [2, 6, 7, 10, 11, 12]
let c = 13;

function hFacto(num) {
    var rval = 1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

function returnSize(n, r) {
    return hFacto(n) / (hFacto(r) * hFacto((n) - r));
}


let t0 = arr[0] > 1 ? (returnSize(c - 1, 6) - returnSize(c - arr[0], 6)) : 0
let t1 = arr[1] > 2 ? (returnSize(c - 2, 5) - returnSize(c - arr[1], 5)) : 0
let t2 = arr[2] > 3 ? (returnSize(c - 3, 4) - returnSize(c - arr[2], 4)) : 0
let t3 = arr[3] > 4 ? (returnSize(c - 4, 3) - returnSize(c - arr[3], 3)) : 0
let t4 = arr[4] > 5 ? (returnSize(c - 5, 2) - returnSize(c - arr[4], 2)) : 0
let t5 = arr[5] > 6 ? (returnSize(c - 6, 1) - returnSize(c - arr[5], 1)) : 0


console.log("Bölme 0 -> " + t0);
console.log("Bölme 1 -> " + t1);
console.log("Bölme 2 -> " + t2);
console.log("Bölme 3 -> " + t3);
console.log("Bölme 4 -> " + t4);
console.log("Bölme 5 -> " + t5);
console.log("Default  Constant -> 1");
console.log("< - - - >");


let f = ((t0 + t1 + t2 + t3 + t4 + t5) + 1)
console.log("Index : -> " + f)