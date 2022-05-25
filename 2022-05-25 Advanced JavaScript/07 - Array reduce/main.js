const btn1 = document.querySelector('#btn1');

function testArray() {
  const arr = [16, 26, 39, 42, 50, 60, 70, 80, 90];

  let sum = 0;
  for (const item of arr) {
    sum += item;
  }

  console.log(sum);

  sum = arr.reduce((sum, item) => sum + item, 0);

  console.log(sum);
}

btn1.onclick = testArray;
