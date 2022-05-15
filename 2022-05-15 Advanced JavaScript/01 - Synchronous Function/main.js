function doSomething() {
  let sum = 0;
  for (let i = 1; i <= 2000000000; i++) {
    sum++;
  }
  console.log('Doing something...');
}

function test() {
  console.log('Start');
  doSomething();
  console.log('End');
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = test;
}

window.onload = onWindowLoad;
