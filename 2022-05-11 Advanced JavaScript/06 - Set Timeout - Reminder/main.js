// let text;

// function showText() {
//   alert(text);
// }

// function reminder() {
//   text = prompt('Enter reminder text: ');
//   const seconds = +prompt('Enter number of seconds to remind you:');
//   setTimeout(showText, 1000 * seconds);
// }

function reminder() {
  const text = prompt('Enter reminder text: ');
  const seconds = +prompt('Enter number of seconds to remind you:');
  setTimeout(function () {
    alert(text);
  }, 1000 * seconds);
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = reminder;
}

window.onload = onWindowLoad;
