var first = +prompt("Enter first number:");
var last = +prompt("Enter last number:");

for (var i = first; i <= last; i = i + 1) {
  if (i % 7 == 0) {
    document.write(i + "<br/>");
  }
}
