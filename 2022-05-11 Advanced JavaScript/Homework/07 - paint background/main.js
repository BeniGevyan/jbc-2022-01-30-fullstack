// function paint(color1, color2, color3) {
//   const colorsArr = [color1, color2, color3];
//   const randomIndex = Math.floor(Math.random() * colorsArr.length);
//   const randomColor = colorsArr[randomIndex];
//   document.body.style.backgroundColor = randomColor;
//   return randomColor;
// }

function nice(paintCallback) {
  const paintedColor = paintCallback('Green', 'Red', 'Blue');
  document.body.innerText = 'Painted Color: ' + paintedColor;
}

function onWindowLoad() {
  nice((color1, color2, color3) => {
    const colorsArr = [color1, color2, color3];
    const randomIndex = Math.floor(Math.random() * colorsArr.length);
    const randomColor = colorsArr[randomIndex];
    document.body.style.backgroundColor = randomColor;
    return randomColor;
  });
}

window.onload = onWindowLoad;
