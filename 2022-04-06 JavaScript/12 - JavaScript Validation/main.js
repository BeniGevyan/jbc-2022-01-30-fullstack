function checkLogin(event) {
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");

  if (usernameInput.value === "") {
    alert("Missing username!");
    usernameInput.style.backgroundColor = "red";
    usernameInput.focus();
    event.preventDefault();
    return;
  }

  if (usernameInput.value.length < 4) {
    alert("Username too short!!");
    usernameInput.style.backgroundColor = "red";
    usernameInput.focus();
    event.preventDefault();
    return;
  }

  if (passwordInput.value === "") {
    alert("Missing password!");
    passwordInput.style.backgroundColor = "red";
    passwordInput.focus();
    event.preventDefault();
    return;
  }

  if (passwordInput.value.length < 4) {
    alert("password too short!!");
    passwordInput.style.backgroundColor = "red";
    passwordInput.focus();
    event.preventDefault();
    return;
  }

  alert("Sending the values to the server...");
}

function onWindowLoad() {
  const form = document.querySelector("form");

  form.onsubmit = checkLogin;
}

window.onload = onWindowLoad;
