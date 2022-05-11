function calc(a, b, resultCallback) {
  const c = (a * b) / 100; // doing some complex calculation...
  resultCallback(c);
}

function test() {
  calc(10, 20, function (result) {
    alert(result);
  });
  calc(300, 400, function (result) {
    document.write(result);
  });
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = test;
}

window.onload = onWindowLoad;
