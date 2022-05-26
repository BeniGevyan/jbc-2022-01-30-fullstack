const btn1 = document.querySelector('#btn1');

function testSet() {
  const items = new Set();

  items.add('Moishe');
  items.add('Kipi');
  items.add('Ugi');
  items.add('Kermit');

  console.log('Total items: ' + items.size);

  items.add('Kipi');

  console.log('Total items: ' + items.size);

  for (const item of items) {
    console.log(item);
  }

  if (items.has('Ugi')) {
    console.log('Ugi is in the house!!');
  }
}

btn1.onclick = testSet;
