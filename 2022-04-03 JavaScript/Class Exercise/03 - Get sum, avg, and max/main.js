function getSum(arr) {
  let sum = 0;
  for (const item of arr) {
    sum += item;
  }
  return sum;
}

function getAvg(myArr) {
  const sum = getSum(myArr);
  return sum / arr.length;
}

function getMax(arr) {
  let max = 0;
  for (const item of arr) {
    if (max < item) {
      max = item;
    }
  }
  return max;
}

const numbers = [12, 23, 34, 34, 23, 56, 78];

const sum = getSum(numbers);
const avg = getAvg(numbers);
const max = getMax(numbers);

document.write(`Sum: ${sum}<br/>`);
document.write(`Avg: ${avg}<br/>`);
document.write(`Max: ${max}<br/>`);
