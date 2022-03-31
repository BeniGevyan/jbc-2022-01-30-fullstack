function printLine(len) {
  for (let i = 1; i <= len; i++) {
    document.write("* ");
  }
}

function printRectangle(width, height) {
  for (let i = 1; i <= height; i++) {
    printLine(width);
    document.write("<br>");
  }
}

function printRandomRectangles(count) {
  for (let i = 1; i <= count; i++) {
    const randomWidth = Math.floor(Math.random() * 10) + 1;
    const randomHeight = Math.floor(Math.random() * 10) + 1;
    printRectangle(randomWidth, randomHeight);
    document.write("<br>");
  }
}

const n = +prompt("Enter rectangles count:");

printRandomRectangles(n);
