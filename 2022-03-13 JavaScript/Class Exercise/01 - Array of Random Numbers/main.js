var numbers = [];

// for(var i = 0; i < 100; i = i + 1) {
//   numbers[i] = Math.floor(Math.random() * 100);
// }

for (var i = 1; i <= 100; i = i + 1) {
  numbers.push(Math.floor(Math.random() * 100));
}

for (var i = 0; i < numbers.length; i = i + 1) {
  document.write(numbers[i] + " | ");
}

var min = numbers[0];

for (var i = 0; i < numbers.length; i = i + 1) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

document.write("<br> Minimum: " + min);
