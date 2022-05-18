function doSomething(min, max) {
  const myPromise = new Promise((successCallback, errorCallback) => {
    setTimeout(() => {
      try {
        const n = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(Math.PI.toFixed(n));
        console.log('Doing something...');
        successCallback(n);
      } catch (err) {
        errorCallback(err);
      }
    }, 3000);
  });
  return myPromise;
}

function run() {
  let myPromise = doSomething(0, 180);
  myPromise = myPromise.then((result) => alert(result));
  myPromise.catch((error) => console.log(error.message));
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = run;
}

window.onload = onWindowLoad;
