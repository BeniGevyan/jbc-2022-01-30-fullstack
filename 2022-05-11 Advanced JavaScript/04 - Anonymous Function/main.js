function doWork(callback) {
  alert("Start");
  callback();
  alert("End");
}

function test() {
  doWork(function () { 
    alert('Doing Something...');
  });
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = test;
}

window.onload = onWindowLoad;