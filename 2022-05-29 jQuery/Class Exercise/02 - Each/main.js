function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgb(${r},${g},${b})`;
  return color;
}

for (let i = 0; i < 20; i++) {
  $('section').append(`<div>${i}</div>`);
}

$('section > div').each((index, element) => {
  $(element).css('background-color', getRandomColor());
});
