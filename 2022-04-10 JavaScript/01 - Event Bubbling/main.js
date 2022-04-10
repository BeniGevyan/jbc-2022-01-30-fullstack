function onListClick(event) {
  console.log(`List clicked!! event target: ${event.target.tagName}`);
}

function onDogClick(event) {
  console.log(`Dog clicked!! event target: ${event.target.tagName}`);
  // event.stopPropagation();
}

function onWindowLoad() {
  const petsList = document.querySelector("#petsList");
  petsList.onclick = onListClick;

  const dogItem = document.querySelector("#dogItem");
  dogItem.onclick = onDogClick;
}

window.onload = onWindowLoad;
