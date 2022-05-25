const btn1 = document.querySelector('#btn1');

function testArray() {
  const arr = [16, 26, 39, 42, 50, 60, 70, 80, 90];

  let powersArr = [];

  for (item of arr) {
    powersArr.push(item ** 2);
  }

  console.log(powersArr);

  powersArr = arr.map((item) => item ** 2);
}

btn1.onclick = testArray;
