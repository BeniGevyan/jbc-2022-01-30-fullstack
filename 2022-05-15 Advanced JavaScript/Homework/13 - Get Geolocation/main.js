function showGeolocation(success, error) {
  navigator.geolocation.getCurrentPosition(success, error);
}

function run() {
  showGeolocation(
    (result) => {
      const span = document.querySelector('#span');
      span.innerText = 'Latitude: ' + result.coords.latitude + ' - Longitude: ' + result.coords.longitude;
    },
    (error) => alert(error.message),
  );
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = run;
}

window.onload = onWindowLoad;
