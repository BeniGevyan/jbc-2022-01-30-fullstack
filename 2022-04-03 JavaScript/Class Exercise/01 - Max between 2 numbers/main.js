// first way
function getMax(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}

// second way
function getMax2(n1, n2) {
  if (n1 > n2) {
    return n1;
  }
  return n2;
}

// third way
function getMax3(n1, n2) {
  let max = n1;
  if (n2 > n1) {
    max = n2;
  }
  return max;
}

// four way
function getMax4(n1, n2) {
  return n1 > n2 ? n1 : n2;
}

const result = getMax4(10, 20);
document.write(`Max: ${result}`);
