function drawSomething() {
  const myCanvas = document.querySelector("#myCanvas");

  const painter = myCanvas.getContext("2d");

  // Draw rectangle
  painter.strokeStyle = "green"; // stroke = משיכת מכחול
  painter.strokeRect(50, 30, 100, 70); // x, y, w, h

  painter.fillStyle = "red"; // fill = מילוי
  painter.fillRect(50, 150, 100, 70); // x, y, w, h

  painter.strokeStyle = "blue";
  painter.beginPath();
  painter.arc(300, 60, 40, 0, 2 * Math.PI); // x, y, radius, start, end
  painter.stroke(); // צייר את הקו

  painter.fillStyle = "yellow";
  painter.beginPath();
  painter.arc(300, 200, 40, 0, 2 * Math.PI); // x, y, radius, start, end
  painter.fill();

  painter.strokeStyle = "black";
  painter.beginPath();
  painter.moveTo(400, 100); // לאן להגיע
  painter.lineTo(500, 200); // ציור קו מהמקום הקודם עד לכאן
  painter.stroke();
}

function onWindowLoad() {
  const btn1 = document.querySelector("#btn1");
  btn1.onclick = drawSomething;
}

window.onload = onWindowLoad;
