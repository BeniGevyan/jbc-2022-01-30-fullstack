const btn1 = document.querySelector('#btn1');

function testArray() {
  const arr = [16, 25, 39, 42, 50, 60, 70, 80, 90];

  let evenNumbers = [];

  for (const item of arr) {
    if (item % 2 === 0) {
      evenNumbers.push(item);
    }
  }

  console.log(evenNumbers);

  evenNumbers = arr.filter((num) => num % 2 === 0);

  console.log(evenNumbers);
}

btn1.onclick = testArray;
