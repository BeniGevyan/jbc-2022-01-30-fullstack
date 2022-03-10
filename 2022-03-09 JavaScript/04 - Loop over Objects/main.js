var student = {
  fullName: "Ugi Fletzet",
  averageGrade: 97,
  age: 25,
  phone: "0507777777",
};

for (var prop in student) {
  document.write(prop + "-->" + student[prop] + "<br/>");
}
