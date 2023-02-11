
/*
let arr = [1, 2, 3, 6, 10, 11]
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


let t0 = arr[0] - 1 === 0 ? 0 : returnSize(c - (arr[0] - 1), 6)
let t1 = arr[1] - 2 === 0 ? 0 : returnSize(c - arr[1], 5)
let t2 = arr[2] - 3 === 0 ? 0 : returnSize(c - arr[2], 4)
let t3 = arr[3] - 4 === 0 ? 0 : returnSize(c - arr[3], 3)
let t4 = arr[4] - 5 === 0 ? 0 : returnSize(c - arr[4], 2)
let t5 = arr[5] - 6 === 0 ? 1 : arr[5] - arr[4]


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

*/


let arr = [1, 2, 3, 5, 8, 9]
let val =
    (8 + 7 + 6 + 5 + 4 + 3 + 2 + 1) +
    (7 + 6 + 5 + 4 + 3 + 2 + 1) +
    (6 + 5 + 4 + 3 + 2 + 1)



// let fx1 = tfunc(8)
// let fx2 = tfunc(7)
// let fx3 = tfunc(6)
// console.log(fx1, fx2, fx3, "Toplam : ", fx1 + fx2 + fx3);
function tfunc(n) {
    let value = (n * (n + 1)) / 2
    return value;
}


let a1 = arr[5] > 6 ? tfunc(13 - arr[5]) : 0
let a2 = arr[4] > 5 ? tfunc(13 - arr[4]) : 0
let a3 = arr[3] > 4 ? tfunc(13 - arr[3]) : 0
let a4 = arr[2] > 3 ? tfunc(13 - arr[2]) : 0
let a5 = arr[1] > 2 ? tfunc(13 - arr[1]) : 0
let a6 = arr[0] > 1 ? tfunc(13 - arr[0]) : 0
console.log(a1, a2, a3, a4, a5, a6, "Toplam : ", a1 + a2 + a3 + a4 + a5 + a6);