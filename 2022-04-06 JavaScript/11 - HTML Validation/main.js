function checkLogin() {
  alert("Sending the values to the server...");
}

function onWindowLoad() {
  const form = document.querySelector("form");

  form.onsubmit = checkLogin;
}

window.onload = onWindowLoad;
