function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgb(${r},${g},${b})`;
  return color;
}

const btn1 = document.querySelector('#btn1');

btn1.onclick = () => {
  const inputVal = $('#input1').val();
  $('#input1').val('');
  $('#content')
    .text(inputVal)
    .css('background-color', getRandomColor())
    .css('border', `1px solid ${getRandomColor()}`)
    .fadeOut(3000)
    .fadeIn(3000);
};
