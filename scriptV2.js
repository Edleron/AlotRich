const fs = require('fs');

class Hero {
    constructor(n, r) {
        this.n = n;
        this.r = r
        this.calculated = this.hCombination(this.n, this.r);
    }

    returnSize() {
        return this.hFacto(this.n.length) / (this.hFacto(this.r) * this.hFacto((this.n.length) - this.r));
    }

    returnData = () => {
        const data = new Map();
        for (let i = 0; i < this.calculated.length; i++) {
            data.set(i + 1, this.calculated[i]);
        }
        return data;
    }

    hFacto(num) {
        var rval = 1;
        for (var i = 2; i <= num; i++)
            rval = rval * i;
        return rval;
    }

    // Source -> https://jarednielsen.com/algorithm-combinations/
    // Todo
    hCombination(n, k) {
        const combos = [];

        let head, tail;

        if (k === 1) {
            return n;
        }

        for (let i = 0; i < n.length; i++) {
            head = n.slice(i, i + 1);
            tail = this.hCombination(n.slice(i + 1), k - 1);
            for (let j = 0; j < tail.length; j++) {
                let combo = head.concat(tail[j]);
                combos.push(combo);
            }
        }

        return combos;
    }
}

/*
let hero = new Hero([
    1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    32, 32, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    6);


let hero = new Hero([
    1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 21, 22, 23, 24],
    6);

*/

let hero = new Hero([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    6);

// console.log(hero.returnData());
console.log(hero.returnSize());

function saveToJson() {
    fs.writeFile('data.json', JSON.stringify(Object.fromEntries(hero.returnData())), function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("JSON saved to " + 'data.json');
        }
    });
}

saveToJson();

// 13 + 4 +15 + 84 + 210 + 462 = 788, 62