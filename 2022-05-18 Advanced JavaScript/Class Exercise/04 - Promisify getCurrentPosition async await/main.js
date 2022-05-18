function getCurrentPositionAsync() {
  return new Promise((reslove, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => reslove(position),
      (error) => reject(error),
    );
  });
}

function getPostion() {
  getCurrentPositionAsync()
    .then((result) =>
      alert(`long: ${result.coords.longitude}, lat: ${result.coords.latitude}`),
    )
    .catch((error) => console.log(error.message));
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = getPostion;
}

window.onload = onWindowLoad;
