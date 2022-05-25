const btn1 = document.querySelector('#btn1');

function testArray() {
  const arr = [16, 26, 39, 42, 50, 60, 70, 80, 90];

  for (const item of arr) {
    console.log(item);
  }

  console.log('----------');

  arr.forEach((item) => console.log(item));

  console.log('----------');

  arr.forEach((item, index) => console.log(index + ' - ' + item));
}

btn1.onclick = testArray;
