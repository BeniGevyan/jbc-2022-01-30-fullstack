function printLine(limit) {
  for (let i = 1; i <= limit; i++) {
    document.write(i + " ");
  }
}

function printTriangle(size) {
  for (let i = 1; i <= size; i++) {
    printLine(i);
    document.write("<br/>");
  }
}

const n = +prompt("Enter triangle size:");

printTriangle(n);
