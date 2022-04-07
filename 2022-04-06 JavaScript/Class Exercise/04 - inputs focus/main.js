function paintMeInYellow(event) {
  event.target.style.backgroundColor = "yellow";
}

function paintMeInWhite(event) {
  event.target.style.backgroundColor = "white";
}

function onWindowLoad() {
  const inputs = document.querySelectorAll("input");

  for (const input of inputs) {
    input.onfocus = paintMeInYellow;
    input.onblur = paintMeInWhite;
  }
}

window.onload = onWindowLoad;
