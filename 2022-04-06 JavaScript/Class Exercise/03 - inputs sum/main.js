function onBtnClick() {
  const num1Input = document.getElementById("num1");
  const num1 = +num1Input.value;

  const num2Input = document.getElementById("num2");
  const num2 = +num2Input.value;

  alert(num1 + num2);
}

function onWindowLoad() {
  const btn = document.getElementById("sumBtn");

  btn.onclick = onBtnClick;
}

window.onload = onWindowLoad;
