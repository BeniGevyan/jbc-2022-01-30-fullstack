const btn1 = document.querySelector('#btn1');

function testArray() {
  // const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  const arr = new Array(10, 20, 30, 40, 50, 60, 70, 80, 90); // same as above

  arr.push(100);

  const newArr = arr.slice(1, 4); // Immutable - doesn't change the original value

  console.log(arr);
  console.log(newArr);

  arr.splice(2, 5); // Mutable - change the original value;

  console.log(arr);
}

btn1.onclick = testArray;
