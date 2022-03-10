var grades = [];

grades.push(95);
grades.push(100);
grades.push(87);
grades.push(95);

document.write("First Grade: " + grades[0] + "<br/>"); // 95
document.write("Second Grade: " + grades[1] + "<br/>"); // 100
document.write("Third Grade: " + grades[2] + "<br/>"); // 87
document.write("Forth Grade: " + grades[3] + "<br/>"); // 95
document.write("Fifth Grade: " + grades[4] + "<br/>"); // undefined

document.write("<hr/>");
grades.splice(2, 1); // 2 is the index, 1 is the number of items to delete from that index forward

document.write("First Grade: " + grades[0] + "<br/>"); // 95
document.write("Second Grade: " + grades[1] + "<br/>"); // 100
document.write("Third Grade: " + grades[2] + "<br/>"); // 95
document.write("Forth Grade: " + grades[3] + "<br/>"); // undefined
document.write("Fifth Grade: " + grades[4] + "<br/>"); // undefined
