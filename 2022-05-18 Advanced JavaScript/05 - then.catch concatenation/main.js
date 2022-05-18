function doSomething(min, max) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      try {
        const n = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(Math.PI.toFixed(n));
        console.log('Doing something...');
        reslove(n);
      } catch (err) {
        reject(err);
      }
    }, 3000);
  });
}

function run() {
  let myPromise = doSomething(0, 180);
  myPromise
    .then((result) => alert(result))
    .catch((error) => console.log(error.message));
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = run;
}

window.onload = onWindowLoad;
