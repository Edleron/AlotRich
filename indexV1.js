var givenNumbers = [3, 11, 18, 34, 35, 41];
var newSets = [];

for (var i = 0; i < givenNumbers.length; i++) {
    for (var j = i + 1; j < givenNumbers.length; j++) {
        var selectedNumber1 = givenNumbers[i];
        var selectedNumber2 = givenNumbers[j];
        var newSet = [];

        for (var k = 1; k <= 60; k++) {
            if (!givenNumbers.includes(k) || k === selectedNumber1 || k === selectedNumber2) {
                newSet.push(k);
            }
        }
        newSets.push([i, j, newSet]);
        console.log(`Set : ${newSet[i, j, newSet]}`);
    }
}