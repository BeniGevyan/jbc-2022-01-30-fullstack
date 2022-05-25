const btn1 = document.querySelector('#btn1');

function testArray() {
  const arr = [];

  for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }

  console.log('The array: ' + arr);

  const greaterThan90 = arr.find((item) => item > 90);

  console.log('The first number that is greater than 90: ' + greaterThan90);

  const endsWith7 = arr.filter((item) => item % 10 === 7);

  console.log('All items ends with 7: ' + endsWith7);

  const index = arr.findIndex((item) => item % 2 === 0 && item > 70);

  console.log(
    'First index of number that is even and greater than 70 ' + index,
  );

  const sqrtArr = arr.map((item) => Math.sqrt(item));

  console.log('Array of square roots' + sqrtArr);

  const max = arr.reduce((max, item) => (item > max ? item : max), arr[0]);

  console.log('Max is: ' + max);

  const sumOfdividedBy7 = arr
    .filter((item) => item % 7 === 0)
    .reduce((sum, item) => sum + item, 0);

  console.log('Sum of numbers that can be devided by 7: ' + sumOfdividedBy7);

  // arr.forEach((item) => console.log(item));

  console.log(
    'All even numbers in one command: ' + arr.filter((item) => item % 2 === 0),
  );

  console.log(
    'Power of 2, numbers that ends with 5: ' +
      arr.filter((item) => item % 10 === 5).map((item) => item ** 2),
  );

  console.log(
    'Last task: ' +
      arr
        .filter((item) => item > 50)
        .map((item) => (item % 2 === 0 ? 'Even' : 'Odd')),
  );
}

btn1.onclick = testArray;
