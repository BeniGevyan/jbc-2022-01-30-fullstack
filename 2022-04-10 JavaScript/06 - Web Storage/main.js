function saveCookie() {
  const fullNameBox = document.querySelector("#fullNameBox");
  const fullName = fullNameBox.value;

  // Non Persistent cookie
  //document.cookie = `fullName=${fullName}`;

  const now = new Date();
  now.setSeconds(now.getSeconds() + 3);
  document.cookie = `fullName=${fullName}; expires=${now}`;
}

function onWindowLoad() {
  const saveCookieBtn = document.querySelector("#saveCookie");
  const loadCookieBtn = document.querySelector("#loadCookie");
  saveCookieBtn.onclick = saveCookie;
  loadCookieBtn.onclick = loadCookie;
}

window.onload = onWindowLoad;
