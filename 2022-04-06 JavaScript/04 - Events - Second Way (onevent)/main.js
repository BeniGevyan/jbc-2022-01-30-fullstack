function showMessage() {
  alert("Hello!");
}

function displayAlert() {
  alert("Testing");
}

function onWindowLoad() {
  const btn1 = document.getElementById("btn1");
  btn1.onclick = showMessage;

  const btn2 = document.getElementById("btn2");
  btn2.onmouseover = displayAlert;
}

window.onload = onWindowLoad;
