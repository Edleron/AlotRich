function getRandomNumbers(num_count) {
    let randomNumbers = [];
    for (let i = 0; i < num_count; i++) {
        let randomNumber = Math.floor(Math.random() * (60 - 1 + 1)) + 1;
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}
console.log(getRandomNumbers(6));