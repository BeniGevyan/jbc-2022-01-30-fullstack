function runCode() {
  try {
    const codeBox = document.querySelector('#codeBox');
    const code = codeBox.value;
    eval(code);
  } catch (e) {
    alert('There was error with your code: ' + e.message);
  }
}

function onWindowLoad() {
  const btn = document.querySelector('#btn1');
  btn.onclick = runCode;
}

window.onload = onWindowLoad;
