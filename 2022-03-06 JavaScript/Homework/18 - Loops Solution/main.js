var num = +prompt("Enter number:");

var sum = 0;

while (num != 0) {
  var rightDigit = num % 10;
  sum = sum + rightDigit;
  num = (num - rightDigit) / 10;
}

document.write("Sum of digits: " + sum);
