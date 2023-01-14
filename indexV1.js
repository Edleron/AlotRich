var givenNumbers = [3, 11, 18, 34, 35, 41];
var newSets = [];

for (var j = 0; j < givenNumbers.length; j++) {
    var selectedNumber = givenNumbers[j];
    var newSet = [];

    for (var i = 1; i <= 60; i++) {
        if (!givenNumbers.includes(i) || i === selectedNumber) {
            newSet.push(i);
        }
    }
    newSets.push([j, newSet]);
}

console.log(newSets);