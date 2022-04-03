function isArrayPositive(arr) {
  for (const item of arr) {
    if (item < 0) {
      return false;
    }
  }
  return true;
}

// Not efficient!!
// function isArrayPositive(arr) {
//   const isPositive = true;
//   for (const item of arr) {
//     if (item < 0) {
//       isPositive = false;
//     }
//   }
//   return isPositive;
// }

const numbers = [1, -6, 7];

if (isArrayPositive(numbers)) {
  alert("Array is Positive!");
} else {
  alert("Array is not Positive!");
}
