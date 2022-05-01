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
    const arr = JSON.parse(currentBooks);

    const table = document.createElement('table');
    const tableHeaderRow = document.createElement('tr');

    const th1 = document.createElement('th');
    const th2 = document.createElement('th');
    const th3 = document.createElement('th');

    th1.innerText = 'Book Name';
    th2.innerText = 'Book Author';
    th3.innerText = 'Book Price';

    tableHeaderRow.appendChild(th1);
    tableHeaderRow.appendChild(th2);
    tableHeaderRow.appendChild(th3);

    table.appendChild(tableHeaderRow);

    for (const book of arr) {
      const tableRow = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      const td3 = document.createElement('td');

      td1.innerText = book.name;
      td2.innerText = book.author;
      td3.innerText = book.price;

      tableRow.appendChild(td1);
      tableRow.appendChild(td2);
      tableRow.appendChild(td3);

      table.appendChild(tableRow);
    }

    const containerDiv = document.querySelector('#containerDiv');
    containerDiv.innerHTML = '';
    containerDiv.appendChild(table);
  }
}

function onWindowLoad() {
  loadBooks();

  const saveBtn = document.querySelector('#saveBtn');
  saveBtn.onclick = save;
}

window.onload = onWindowLoad;
