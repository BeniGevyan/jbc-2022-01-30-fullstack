function showName() {
  const fullNameBox = document.getElementById("fullNameBox");

  const fullName = fullNameBox.value;

  alert(fullName);
}

function onWindowLoad() {
  const btn1 = document.getElementById("btn1");

  btn1.onclick = showName;
}

window.onload = onWindowLoad;
