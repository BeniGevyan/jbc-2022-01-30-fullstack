const btn1 = document.querySelector('#btn1');

function isGreaterThan30(num) {
  return num > 30;
}

function testArray() {
  const arr = [16, 25, 39, 42, 50, 60, 70, 80, 90];

  let value;
  for (const item of arr) {
    if (item > 30) {
      value = item;
      break;
    }
  }

  console.log(value);

  value = arr.find(isGreaterThan30);

  value = arr.find(function (num) {
    return num > 30;
  });

  value = arr.find((num) => num > 30);

  console.log(value);
}

btn1.onclick = testArray;
