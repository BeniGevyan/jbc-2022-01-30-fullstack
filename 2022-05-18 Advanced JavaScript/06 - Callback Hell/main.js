function getRandomEvenNumberAfterDelayAsync(min, max) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      if (num % 2 === 0) {
        reslove(num);
      } else {
        reject(new Error('Failed to generate random even number'));
      }
    }, 1000);
  });
}

function showNumber() {
  getRandomEvenNumberAfterDelayAsync(1, 1000)
    .then((num1) => {
      alert(`first num: ${num1}`);
      getRandomEvenNumberAfterDelayAsync(1, num1)
        .then((num2) => {
          alert(`first num: ${num2}`);
          getRandomEvenNumberAfterDelayAsync(1, num2)
            .then((num3) => alert(`first num: ${num3}`))
            .catch((err) => console.log(err.message));
        })
        .catch((err) => console.log(err.message));
    })
    .catch((err) => console.log(err.message));
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = run;
}

window.onload = onWindowLoad;
