const btn1 = document.querySelector('#btn1');

function testMap() {
  const items = new Map();

  items.set(10, 'Hello');
  items.set(20, "What's up?");
  items.set(30, 'Bye');
  items.set(40, 'Cool');

  items.set(20, 'Somethiong else...');

  console.log('Total items: ' + items.size);

  console.log('Do we have key=20: ' + items.has(20));
  console.log('Do we have key=25: ' + items.has(25));

  console.log(items.get(30));
  console.log(items.get(37));

  for (const key of items.keys()) {
    console.log(key);
  }

  for (const value of items.values()) {
    console.log(value);
  }

  // [[10, 'Hello'], [20, "What's up?"], [], []]

  for (const entry of items.entries()) {
    console.log('Key: ' + entry[0]);
    console.log('Value: ' + entry[1]);
  }
}

btn1.onclick = testMap;
