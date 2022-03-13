var prices = [
  [100, 200, 150, 300],
  [20, 50, 34],
  [99, 33, 22, 66, 33, 22, 22, 66],
];

for (var arr of prices) {
  for (var num of arr) {
    document.write(num + " ");
  }
  document.write("<br/>");
}

document.write("<hr/>");

var sum = 0;
var counter = 0;

for (var arr of prices) {
  for (var num of arr) {
    sum += num;
    counter++;
  }
}

var avg = sum / counter;

document.write("Average price is: " + avg);
