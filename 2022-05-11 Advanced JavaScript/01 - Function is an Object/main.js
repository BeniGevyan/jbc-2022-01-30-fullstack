function doSomething() {
  alert('Doing something...');
  return 123;
}

function test() {
  const x = doSomething;
  const result = x();
  alert('Result ' + result);
  console.log(x);
  document.write(x);
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = test;
}

window.onload = onWindowLoad;