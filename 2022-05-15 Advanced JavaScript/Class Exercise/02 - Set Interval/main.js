const sentences = [
  'I love New York',
  'I love Tel Aviv',
  'I love Istanbul',
  'I love Las Vegas',
  'I love Kiev',
];

setInterval(() => {
  const index = Math.floor(Math.random() * sentences.length);
  document.body.innerText = sentences[index];
}, 1000);
