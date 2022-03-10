var grades = [];

for (var i = 1; i <= 10; i = i + 1) {
  var oneGrade = +prompt("Enter a grade:");
  grades.push(oneGrade);
}

for (var i = 0; i < grades.length; i = i + 1) {
  document.write(grades[i] + " | ");
}

var sum = 0;
for (var i = 0; i < grades.length; i = i + 1) {
  sum = sum + grades[i];
}

var avg = sum / grades.length;

document.write("<br/>Average: " + avg);
