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

async function showNumber() {
  try {
    const num1 = await getRandomEvenNumberAfterDelayAsync(1, 1000);
    alert(`first num: ${num1}`);
    const num2 = await getRandomEvenNumberAfterDelayAsync(1, num1);
    alert(`second num: ${num2}`);
    const num3 = await getRandomEvenNumberAfterDelayAsync(1, num2);
    alert(`third num: ${num3}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = run;
}

window.onload = onWindowLoad;
