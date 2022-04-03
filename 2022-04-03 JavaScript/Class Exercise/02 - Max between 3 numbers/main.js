function getMax(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > c) {
    return b;
  }
  return c;
}

// second way
// function getMax(a, b, c) {
//   let max = a;
//   if (b > a) {
//     max = b;
//   }
//   if (c > b && c > a) {
//     max = c;
//   }
//   return max;
// }

// with Math object
// const result = Math.max(10, 70, 30);

const result = getMax(10, 70, 30);
document.write(`Max: ${result}`);
