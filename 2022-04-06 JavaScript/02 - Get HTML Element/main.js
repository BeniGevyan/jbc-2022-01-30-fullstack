function onWindowLoad() {
  const myButton = document.getElementById("myButton");

  const buttonInnerText = myButton.innerText;

  alert(buttonInnerText);
}

window.onload = onWindowLoad;
