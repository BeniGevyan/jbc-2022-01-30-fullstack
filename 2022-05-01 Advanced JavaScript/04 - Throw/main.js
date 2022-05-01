function getVat(price) {
  if (price < 0) {
    throw new Error('Price must be positive');
  }
  const vatPrecentage = 17;
  const vat = price * (vatPrecentage / 100);
  return vat;
}

function showVat() {
  try {
    const price = +prompt('Enter your price: ');
    const vat = getVat(price);
    alert(`VAT: ${vat}`);
  } catch (err) {
    alert(err.message);
  }
}

function onWindowLoad() {
  const btn = document.querySelector('#btn1');
  btn.onclick = showVat;
}

window.onload = onWindowLoad;
