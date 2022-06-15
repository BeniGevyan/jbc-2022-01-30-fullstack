function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function createArray(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(getRandomNumber(100, 200));
    }
    return arr;
}
function displayArr(arr) {
    arr.forEach((num) => {
        document.write(num + '</br>');
    });
}
const n = +prompt('Enter number:');
const arr = createArray(n);
displayArr(arr);
