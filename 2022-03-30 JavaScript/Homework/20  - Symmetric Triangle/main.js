function printSpaces(num) {
  for (let i = 1; i <= num; i++) {
    document.write("&nbsp;&nbsp;");
  }
}

function printOneToNumber(num) {
  for (let i = 1; i <= num; i++) {
    document.write(i);
  }
}

function printNumberToOne(num) {
  for (let i = num; i >= 1; i--) {
    document.write(i);
  }
}

function printLine(n, lineNumber) {
  printSpaces(n - lineNumber);
  printOneToNumber(lineNumber);
  printNumberToOne(lineNumber - 1);
  printSpaces(n - lineNumber);
}

function printTriangle(n) {
  for (let i = 1; i <= n; i++) {
    printLine(n, i);
    document.write("<br/>");
  }
}

printTriangle(4);
