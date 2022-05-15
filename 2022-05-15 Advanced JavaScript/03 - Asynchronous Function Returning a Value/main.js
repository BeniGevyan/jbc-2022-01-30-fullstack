function doSomething(callback) {
  setTimeout(() => {
    let sum = 0;
    for (let index = 1; index < 2000000000; index++) {
      sum++;
    }
    console.log('Doing something...');
    callback(sum);
  }, 10);
}

function run() {
  console.log('Start');
  doSomething((result) => console.log('Result: ' + result));
  console.log('End');
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = run;
}

window.onload = onWindowLoad;
