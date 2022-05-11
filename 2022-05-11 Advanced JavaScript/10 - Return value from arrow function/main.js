function getMyName() {
  return 'Guy';
}

const x = function () {
  return 'Guy';
};

const y = () => {
  return 'Guy';
};

const z = () => 'Guy';

function onWindowLoad() {
  const myName1 = getMyName();
  const myName2 = x();
  const myName3 = y();
  const myName4 = z();
}

window.onload = onWindowLoad;
