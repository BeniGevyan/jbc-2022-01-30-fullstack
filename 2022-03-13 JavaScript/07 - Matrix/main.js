var matrix = [
  [10, 20, 30, 40],
  [11, 22, 33, 44],
  [90, 80, 70, 60],
];

for (var i = 0; i < matrix.length; i++) {
  for (var j = 0; j < matrix[i].length; j++) {
    document.write(matrix[i][j] + " ");
  }
  document.write("<br/>");
}

document.write("<hr/>");

for (var arr of matrix) {
  for (var num of arr) {
    document.write(num + " ");
  }
  document.write("<br/>");
}
