var student = {
  fullName: "Ugi Fletzet",
  averageGrade: 97,
  age: 25,
  phone: "0507777777",
};

for (var prop in student) {
  document.write(prop + "-->" + student[prop] + "<br/>");
}

document.write("<hr>");

var student2 = {
  fullName: prompt("Enter Name: "),
  averageGrade: +prompt("Enter Average Grade: "),
  age: +prompt("Enter Age: "),
  phone: prompt("Phone Numnber: "),
};

for (var prop in student2) {
  document.write(prop + "-->" + student2[prop] + "<br/>");
}
