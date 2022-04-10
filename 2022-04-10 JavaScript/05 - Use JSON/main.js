function useJsonArray() {
  const products = [
    { id: 1, name: "Banana", price: 3.5 },
    { id: 2, name: "Apple", price: 5.7 },
    { id: 3, name: "Peach", price: 2.7 },
  ];

  const json = JSON.stringify(products);
  alert(json);

  const products2 = JSON.parse(json);

  for (const item of products2) {
    console.log(item);
  }
}

function useJsonObject() {
  const prod = { id: 1, name: "apple", price: 8 };

  const json = JSON.stringify(prod);

  alert(json);

  const prod2 = JSON.parse(json);
  console.log(prod2);
}

function onWindowLoad() {
  const btn1 = document.querySelector("#btn1");
  const btn2 = document.querySelector("#btn2");

  btn1.onclick = useJsonArray;
  btn2.onclick = useJsonObject;
}

window.onload = onWindowLoad;
