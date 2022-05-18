function getCurrentPositionAsync() {
  return new Promise((reslove, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => reslove(position),
      (error) => reject(error),
    );
  });
}

async function getPostion() {
  try {
    const result = await getCurrentPositionAsync();
    alert(`long: ${result.coords.longitude}, lat: ${result.coords.latitude}`);
  } catch (err) {
    console.log(err.message);
  }
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = getPostion;
}

window.onload = onWindowLoad;
