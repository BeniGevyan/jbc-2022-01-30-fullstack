function getRandomColorAfterDelayAsync() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const colorsArr = ['red', 'green', 'blue', 'black', 'white', 'grey'];
      const index = Math.floor(Math.random() * colorsArr.length);
      const color = colorsArr[index];
      if (color === 'black') {
        const error = new Error('Black Friday!');
        reject(error);
      } else {
        reslove(color);
      }
    }, 3000);
  });
}

async function paintPage() {
  try {
    const color = await getRandomColorAfterDelayAsync();
    document.body.style.backgroundColor = color;
  } catch (err) {
    alert(error.message);
  }
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = paintPage;
}

window.onload = onWindowLoad;
