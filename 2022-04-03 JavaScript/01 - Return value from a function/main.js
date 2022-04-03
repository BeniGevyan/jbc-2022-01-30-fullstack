function getAverage(n1, n2, n3, n4) {
  const sum = n1 + n2 + n3 + n4;
  const avg = sum / 4;
  return avg;
}

const result = getAverage(10, 20, 30, 40);
document.write(`Average: ${result}<br/>`);

document.write(`Average: ${getAverage(1, 2, 5, 10)}<br/>`); // לא מומלץ

// פחות מומלץ
if (getAverage(3, 6, 8, 20) > 50) {
  document.write("Yes");
}
