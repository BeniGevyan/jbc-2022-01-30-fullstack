function paintMe(event) {
  console.log(event);
  event.target.style.backgroundColor = "green";
}

function onWindowLoad() {
  const buttons = document.querySelectorAll("button");

  for (const btn of buttons) {
    btn.onclick = paintMe;
  }
}

window.onload = onWindowLoad;
