function displayPI() {
  try {
    const digits = +prompt('Enter PI digits count:');
    const pi = Math.PI.toFixed(digits);
    document.write('PI: ' + pi + '<br/>');
    document.write('END<br/>');
  } catch (err) {
    document.write('Error: <br/>');
    document.write(err.message + '<br/>');
  } finally {
    document.write("I'm finally");
  }
}

function onWindowLoad() {
  const piButton = document.querySelector('#piButton');
  piButton.onclick = displayPI;
}

window.onload = onWindowLoad;
