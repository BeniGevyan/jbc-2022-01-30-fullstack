function displayResultInAlert(result) {
  alert(result);
}

function displayResultOnPage(result) {
  document.write(result);
}

function displayResultOnConsole(result) {
  console.log(result);
}

function calc(a, b, resultCallback) {
  const c = a * b / 100; // doing some complex calculation...
  resultCallback(c);
}

function test() {
  calc(10, 20, displayResultInAlert);
  calc(300, 400, displayResultOnConsole);
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = test;
}

window.onload = onWindowLoad;