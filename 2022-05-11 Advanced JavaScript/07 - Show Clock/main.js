// function showTime() {
//   const now = new Date();
//   const time = now.toLocaleTimeString();
//   const clockPar = document.querySelector('#clockPar');
//   clockPar.innerText = time;
// }

// function startClock() {
//   setInterval(showTime, 1000);
// }

function startClock() {
  setInterval(function () {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const clockPar = document.querySelector('#clockPar');
    clockPar.innerText = time;
  }, 1000);
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = startClock;
}

window.onload = onWindowLoad;
