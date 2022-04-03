function getMax(n1, n2) {
  return n1 > n2 ? n1 : n2;
}

function getMaxBetween3(a, b, c) {
  return getMax(c, getMax(a, b));
}

const result = getMaxBetween3(10, 60, 80);
console.log(result);
