function doSomeThing() {
  alert('Doing something...');
}

function doWork(callback) {
  alert('Start');
  callback();
  alert('End');
}

function test() {
  doWork(doSomeThing);

  doWork(function () {
    alert('Doing something...');
  });

  doWork(() => {
    alert('Doing something...');
  });
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = test;
}

window.onload = onWindowLoad;
