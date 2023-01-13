function getRandomNumbers() {
    let randomNumbers = [];
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * (60 - 1 + 1)) + 1;
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}
console.log(getRandomNumbers());