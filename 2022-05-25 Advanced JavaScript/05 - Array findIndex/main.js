const btn1 = document.querySelector('#btn1');

function testArray() {
  const arr = [16, 26, 39, 42, 50, 60, 70, 80, 90];

  let index;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      index = i;
      break;
    }
  }

  console.log(index);

  index = arr.findIndex((item) => item % 2 !== 0);

  console.log(index);
}

btn1.onclick = testArray;
