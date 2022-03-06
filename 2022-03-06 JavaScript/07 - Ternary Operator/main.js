var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");

var max;

// הדרך הרגילה
// if (num1 > num2) {
//   max = num1;
// } else {
//   max = num2;
// }

// באמצעות אופרטור טרנרי
max = num1 > num2 ? num1 : num2;

alert(max);
