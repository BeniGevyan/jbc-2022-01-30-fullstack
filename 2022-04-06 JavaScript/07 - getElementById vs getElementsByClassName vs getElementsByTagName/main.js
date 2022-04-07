function paintOne() {
  const coolPar = document.getElementById("coolPar");
  coolPar.style.backgroundColor = "yellow";
}

function paintSome() {
  const paragraphs = document.getElementsByClassName("nice");
  for (const item of paragraphs) {
    item.style.backgroundColor = "green";
  }
}

function paintAll() {
  const paragraphs = document.getElementsByTagName("p");
  for (const item of paragraphs) {
    item.style.backgroundColor = "red";
  }
}

function onWindowLoad() {
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");

  btn1.onclick = paintOne;

  btn2.onclick = paintSome;

  btn3.onclick = paintAll;
}

window.onload = onWindowLoad;
