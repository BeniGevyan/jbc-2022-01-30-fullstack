function drawRandomSquare() {
  const myCanvas = document.querySelector("#myCanvas");
  const painter = myCanvas.getContext("2d");

  const x = Math.floor(Math.random() * 500);
  const y = Math.floor(Math.random() * 300);
  const w = Math.floor(Math.random() * 100);
  const h = w;

  painter.strokeStyle = getRandomColor();
  painter.strokeRect(x, y, w, h);
}

function getRandomColor() {
  const colors = ["red", "blue", "yellow", "green", "black"];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function clearCanvas() {
  const myCanvas = document.querySelector("#myCanvas");
  const painter = myCanvas.getContext("2d");

  painter.clearRect(0, 0, 600, 400);
}

function onWindowLoad() {
  const btn1 = document.querySelector("#btn1");
  btn1.onclick = drawRandomSquare;

  const btn2 = document.querySelector("#btn2");
  btn2.onclick = clearCanvas;
}

window.onload = onWindowLoad;
