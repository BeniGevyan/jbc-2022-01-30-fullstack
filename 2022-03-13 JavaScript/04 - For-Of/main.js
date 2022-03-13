var salaries = [10000, 20000, 30000, 25000];

for (var i = 0; i < salaries.length; i = i + 1) {
  document.write(`${salaries[i]} | `);
}

document.write("<hr />");

for (var item of salaries) {
  document.write(`${item} | `);
}

var sum = 0;

for (var item of salaries) {
  sum = sum + item;
}

var avg = sum / salaries.length;
document.write("Average salary: " + avg + "<br/>");

document.write("<hr />");

var employees = [
  { name: "Moishe", salary: 10000 },
  { name: "Kipi", salary: 20000 },
  { name: "Ugi", salary: 30000 },
  { name: "Kermit", salary: 25000 },
];

for (var employee of employees) {
  document.write(`Name: ${employee.name}, Salary: ${employee.salary}<br/>`);
}

sum = 0;

for (var employee of employees) {
  sum = sum + employee.salary;
}

avg = sum / employees.length;
document.write("Average employee salary: " + avg + "<br/>");
