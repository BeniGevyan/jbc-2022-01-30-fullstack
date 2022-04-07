function testInnerText() {
  const myPar = document.querySelector("#myPar");
  myPar.innerText = "Some dynamic<br/>text...";
}

function testInnerHTML() {
  const myPar = document.querySelector("#myPar");
  myPar.innerHTML = "Some dynamic<br/>text...";
}

function onWindowLoad() {
  const btn1 = document.querySelector("#btn1");
  const btn2 = document.querySelector("#btn2");

  btn1.onclick = testInnerText;

  btn2.onclick = testInnerHTML;
}

window.onload = onWindowLoad;
