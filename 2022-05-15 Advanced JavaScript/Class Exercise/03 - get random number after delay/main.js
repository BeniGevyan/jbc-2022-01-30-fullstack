function getRandomNumberAfterDelay(callback) {
  setTimeout(() => {
    const random = Math.floor(Math.random() * 1000);
    callback(random);
  }, 3000);
}

function run() {
  getRandomNumberAfterDelay((result) => alert(result));
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = run;
}

window.onload = onWindowLoad;
