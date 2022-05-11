function doSomeThing() {
  alert('Doing something...');
}

function doSomeThingElse() {
  alert('Doing something else...');
}

function doWork(callback) {
  alert("Start");
  callback();
  alert("End");
}

function test() {
  doWork(doSomeThing);
  doWork(doSomeThingElse);
}


function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = test;
}

window.onload = onWindowLoad;