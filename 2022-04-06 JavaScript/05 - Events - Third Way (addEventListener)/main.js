function showMessage() {
  alert("Hello!");
}

function displayAlert() {
  alert("Testing");
}

function onWindowLoad() {
  const btn1 = document.getElementById("btn1");
  btn1.addEventListener("click", showMessage);

  const btn2 = document.getElementById("btn2");
  btn2.addEventListener("mouseover", displayAlert);
}

window.onload = onWindowLoad;
