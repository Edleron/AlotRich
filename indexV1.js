let givenNumbersX = [[11, 18, 23, 34, 35, 41]];

let givenNumbers = [[23, 11, 18, 34, 35, 41]];
let newSets = new Array();

mySorthingArray(givenNumbers);

for (let index = 0; index < givenNumbers.length; index++) {
    newSets.push(givenNumbers[index]);
    for (let t = 0; t < 6; t++) {
        myFunction(newSets[0][0], t, newSets[index], 60)
        newSets.push([0, 0, 0, 0, 0, 0]);
    }
}

function myFunction(currentValue, index, arr, target) {
    if ([0, 1, 2, 3, 4, 5].includes(index)) {
        let cloneArr = [...arr];
        for (let c = 1; c < target; c++) {
            if (!cloneArr.includes(c)) {
                // cloneArr.shift();
                // cloneArr.unshift(c);
                cloneArr[index] = c;
                const addProperty = Array.from(cloneArr);
                newSets.push(addProperty);
            }
        }
    }
}

function mySorthingArray(arr) {
    for (let index = 0; index < arr.length; index++) {
        try {
            arr[index].sort(function (a, b) { return a - b });
        } catch (error) {
            console.log(error);
        }
    }
}

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

newSets.sort(sortFunction);
console.log(newSets);
console.log(typeof newSets, newSets.length);