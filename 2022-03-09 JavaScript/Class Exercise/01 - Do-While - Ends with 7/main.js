do {
  var num = +prompt("Enter a number:");

  if (num == 0) {
    alert("Zero and Even");
  } else if (num % 2 == 0) {
    alert("Even");
  } else {
    alert("Odd");
  }
} while (num % 10 != 7 && num % 10 != -7);
