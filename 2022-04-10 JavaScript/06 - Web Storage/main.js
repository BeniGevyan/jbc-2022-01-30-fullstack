function saveCookie() {
  const fullNameBox = document.querySelector("#fullNameBox");
  const fullName = fullNameBox.value;

  // // Non Persistent cookie
  // document.cookie = `fullName=${fullName}`;

  // Persistent cookie
  const now = new Date();
  now.setMonth(now.getMonth() + 3);
  document.cookie = `fullName=${fullName}; expires=${now}`;
}

function loadCookie() {
  alert(document.cookie);
}

function saveSession() {
  const fullNameBox = document.querySelector("#fullNameBox");
  const fullName = fullNameBox.value;

  sessionStorage.setItem("userFullName", fullName);
}

function loadSession() {
  const fullName = sessionStorage.getItem("userFullName");
  alert(fullName);
}

function saveLocal() {
  const fullNameBox = document.querySelector("#fullNameBox");
  const fullName = fullNameBox.value;
  localStorage.setItem("userFullName", fullName);
}

function loadLocal() {
  const fullName = localStorage.getItem("userFullName");
  alert(fullName);
}

function onWindowLoad() {
  const saveCookieBtn = document.querySelector("#saveCookie");
  const loadCookieBtn = document.querySelector("#loadCookie");
  saveCookieBtn.onclick = saveCookie;
  loadCookieBtn.onclick = loadCookie;

  const saveSessionBtn = document.querySelector("#saveSession");
  const loadSessionBtn = document.querySelector("#loadSession");
  saveSessionBtn.onclick = saveSession;
  loadSessionBtn.onclick = loadSession;

  const saveLocalBtn = document.querySelector("#saveLocal");
  const loadLocalBtn = document.querySelector("#loadLocal");
  saveLocalBtn.onclick = saveLocal;
  loadLocalBtn.onclick = loadLocal;
}

window.onload = onWindowLoad;
