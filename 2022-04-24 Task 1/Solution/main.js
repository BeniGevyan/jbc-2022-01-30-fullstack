function displayArea(value) {
  const areaSpan = document.querySelector('#areaSpan');
  areaSpan.innerText = value;
}

function calculateArea(width, height) {
  return width * height;
}

function isValidRectangle(width, height, x, y) {
  return x + width <= 300 && y + height <= 300;
}

function getInputsValues() {
  const inputs = document.querySelectorAll('input');
  return {
    width: +inputs[0].value,
    height: +inputs[1].value,
    x: +inputs[2].value,
    y: +inputs[3].value,
  };
}

function clearInputValues() {
  const inputs = document.querySelectorAll('input');
  for (const input of inputs) {
    input.value = '';
  }
}

function drawRectangle(width, height, x, y) {
  const canvas = document.querySelector('canvas');
  const painter = canvas.getContext('2d');
  painter.fillStyle = 'blue';
  painter.fillRect(x, y, width, height);
}

function calculateAndDraw() {
  const values = getInputsValues();
  if (isValidRectangle(values.width, values.height, values.x, values.y)) {
    const area = calculateArea(values.width, values.height);
    displayArea(area);
    clearCanvas();
    drawRectangle(values.width, values.height, values.x, values.y);
    localStorage.setItem('values', JSON.stringify(values));
  } else {
    alert('Invalid values!');
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  calculateAndDraw();
}

function clearCanvas() {
  const canvas = document.querySelector('canvas');
  const painter = canvas.getContext('2d');
  painter.clearRect(0, 0, 300, 300);
}

function reset() {
  clearInputValues();
  displayArea('');
  clearCanvas();
  localStorage.clear();
}

function restoreFromLocalStorage() {
  const valuesFromStorage = localStorage.getItem('values');
  if (valuesFromStorage) {
    const values = JSON.parse(valuesFromStorage);
    const inputs = document.querySelectorAll('input');
    inputs[0].value = values.width;
    inputs[1].value = values.height;
    inputs[2].value = values.x;
    inputs[3].value = values.y;
    calculateAndDraw();
  }
}

function onWindowLoad() {
  const form = document.querySelector('form');
  form.onsubmit = onFormSubmit;

  const resetBtn = document.querySelector('#resetBtn');
  resetBtn.onclick = reset;

  restoreFromLocalStorage();
}

window.onload = onWindowLoad;
