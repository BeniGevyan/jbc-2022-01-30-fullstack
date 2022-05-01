function save() {
  const inputs = document.querySelectorAll('input');

  const book = {
    name: inputs[0].value,
    author: inputs[1].value,
    price: +inputs[2].value,
  };

  const currentBooks = localStorage.getItem('allBooks');

  let arr = [];

  if (currentBooks) {
    arr = JSON.parse(currentBooks);
  }

  arr.push(book);

  localStorage.setItem('allBooks', JSON.stringify(arr));

  inputs[0].value = '';
  inputs[1].value = '';
  inputs[2].value = '';

  loadBooks();
}

function loadBooks() {
  const currentBooks = localStorage.getItem('allBooks');
  if (currentBooks) {
    alert(currentBooks);
  }
}

function onWindowLoad() {
  loadBooks();

  const saveBtn = document.querySelector('#saveBtn');
  saveBtn.onclick = save;
}

window.onload = onWindowLoad;
