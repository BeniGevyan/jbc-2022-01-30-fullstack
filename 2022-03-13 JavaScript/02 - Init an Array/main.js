var grades = [80, 90, 95, 100];

grades.push(98);
grades.push(73);

grades[6] = 50;

for (var i = 0; i < grades.length; i = i + 1) {
  document.write(grades[i] + " | ");
}
