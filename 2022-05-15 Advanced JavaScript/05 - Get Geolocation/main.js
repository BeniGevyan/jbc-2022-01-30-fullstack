function showGeolocation() {
  navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => alert(err.message),
  );
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = showGeolocation;
}

window.onload = onWindowLoad;
