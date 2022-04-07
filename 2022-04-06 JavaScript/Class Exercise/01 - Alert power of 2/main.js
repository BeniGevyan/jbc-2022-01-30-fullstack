function showPower() {
  const num = +prompt("Enter a number:");
  alert(num ** 2);
}

function onWindowLoad() {
  const btn1 = document.getElementById("btn1");

  btn1.onclick = showPower;
}

window.onload = onWindowLoad;
