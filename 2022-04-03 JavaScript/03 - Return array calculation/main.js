function getEvenSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const numbers = [12, 23, 34, 34, 23, 56, 78];

const evenSum = getEvenSum(numbers);

alert(evenSum);
