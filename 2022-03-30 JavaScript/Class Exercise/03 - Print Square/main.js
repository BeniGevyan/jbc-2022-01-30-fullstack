function printLine(len) {
  for (let i = 1; i <= len; i++) {
    document.write("* ");
  }
}

function printSquare(size) {
  for (let i = 1; i <= size; i++) {
    printLine(size);
    document.write("<br/>");
  }
}

const n = +prompt("Enter a number:");

printSquare(n);
