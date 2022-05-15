function getRandomNumberAfterDelay(successCallback, errorCallback) {
  setTimeout(() => {
    try {
      const random = Math.floor(Math.random() * 1000);
      Math.PI.toFixed(random % 2 === 0 ? 1 : -1);
      successCallback(random);
    } catch (err) {
      errorCallback(err);
    }
  }, 3000);
}

function run() {
  getRandomNumberAfterDelay(
    (result) => alert(result),
    (error) => console.log(error.message),
  );
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = run;
}

window.onload = onWindowLoad;
