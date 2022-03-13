var a = 1;
var b = 1;

a += 12; // a = 13
b = ++a; // a = 14, b = 14
a *= 2; // a = 28
b += 8; // b = 22
b--; // b = 21
a *= 3; // a = 84
b = --a; // a = 83 , b = 83
a %= 2; // a = 1;
b = --a; // a = 0, b = 0

document.write(`a = ${a}, b = ${b}`);
