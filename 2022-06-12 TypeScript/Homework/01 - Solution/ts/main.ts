function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

function createArray(size: number): number[] {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(getRandomNumber(100, 200));
  }
  return arr;
}

function displayArr(arr: number[]): void {
  arr.forEach((num) => {
    document.write(num + '</br>');
  });
}

const n = +prompt('Enter number:');
const arr = createArray(n);
displayArr(arr);
