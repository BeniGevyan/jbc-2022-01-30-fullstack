var grades = [];

for (var i = 1; i <= 7; i = i + 1) {
  var oneGrade = +prompt("Enter grade:");
  grades.push(oneGrade);
}

for (var i = 0; i < grades.length; i = i + 1) {
  document.write(grades[i] + " | ");
}

var min = grades[0];
var minIndex = 0;

for (var i = 0; i < grades.length; i = i + 1) {
  if (grades[i] < min) {
    min = grades[i];
    minIndex = i;
  }
}

alert("Min Grade: " + min);
alert("Min Garde Index: " + minIndex);
