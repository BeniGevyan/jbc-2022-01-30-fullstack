var num = 1;

while (num > 0) {
  num = +prompt("Enter number:");
  for (var i = num; i >= 1; i = i - 1) {
    // document.write(i + "<br/>");
    console.log(i);
  }
}
