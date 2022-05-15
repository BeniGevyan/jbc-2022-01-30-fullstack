function doSomething(successCallback, errorCallback) {
  setTimeout(() => {
    try {
      const n = Math.floor(Math.random() * 150);
      console.log(Math.PI.toFixed(n));
      console.log('Doing something...');
      successCallback(n);
    } catch (err) {
      errorCallback(err);
    }
  }, 3000);
}

function run() {
  doSomething(
    (result) => alert(result),
    (error) => console.log(error.message),
  );
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = run;
}

window.onload = onWindowLoad;
