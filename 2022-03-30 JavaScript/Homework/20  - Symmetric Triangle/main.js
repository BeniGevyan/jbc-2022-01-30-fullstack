// NOT DONE YET!!!

function printLine(n, lineNum) {
  for (i = 1; i < n; i++) {
    if (i > lineNum) {
      document.write("&nbsp;&nbsp;");
    }
  }

  document.write(lineNum);
  for (i = n; i > 0; i--) {
    if (i > lineNum) {
      document.write("&nbsp;&nbsp;");
    }
  }
}

printLine(4, 1);
document.write("<br/>");
printLine(4, 2);
