function logRandomNumber() {
  const num = Math.floor(Math.random() * 100) + 1;
  console.log(num);
}

function onWindowLoad() {
  const btn1 = document.getElementById("btn1");

  btn1.onmouseover = logRandomNumber;
}

window.onload = onWindowLoad;
