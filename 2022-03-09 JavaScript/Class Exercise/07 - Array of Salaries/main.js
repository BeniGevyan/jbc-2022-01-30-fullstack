var salaries = [];

for (var i = 1; i <= 5; i = i + 1) {
  var salary = +prompt("Enter salary:");
  salaries.push(salary);
}

for (var i = 0; i < salaries.length; i = i + 1) {
  document.write(salaries[i] + " | ");
}

var max = salaries[0];
for (var i = 0; i < salaries.length; i = i + 1) {
  if (salaries[i] > max) {
    max = salaries[i];
  }
}

document.write("<br/>Max Salary: " + max);
