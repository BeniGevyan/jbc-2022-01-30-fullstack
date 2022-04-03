function printLine(n, fullLine) {
  for (let i = 1; i <= n; i++) {
    if (!fullLine && i !== 1 && i !== n) {
      document.write("&nbsp;&nbsp;");
    } else {
      document.write("*");
    }
  }
}

function printRecrangle(width, height) {
  for (let i = 1; i <= height; i++) {
    const isFirstOrLast = i === 1 || i === height;
    printLine(width, isFirstOrLast);
    document.write("<br/>");
  }
}

printRecrangle(6, 4);
