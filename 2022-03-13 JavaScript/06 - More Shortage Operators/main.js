var a = 10;

a++; // a = a + 1;
document.write("a = " + a + "<br/>"); // a = 11

a = 10;
++a; // a = a + 1;
document.write("a = " + a + "<br/>"); // a = 11

a = 10;
var b = a++; // b = a, a = a + 1
document.write("a = " + a + " b = " + b + "<br/>"); // b = 10 , a = 11

a = 10;
b = ++a; //  a = a + 1, b = a
document.write("a = " + a + " b = " + b + "<br/>"); // b = 11 , a = 11

document.write("<hr/>");

a--; // a = a - 1;
document.write("a = " + a + "<br/>"); // a = 9

a = 10;
--a; // a = a - 1;
document.write("a = " + a + "<br/>"); // a = 9

a = 10;
var b = a--; // b = a, a = a - 1
document.write("a = " + a + " b = " + b + "<br/>"); // b = 10 , a = 9

a = 10;
b = --a; //  a = a - 1, b = a
document.write("a = " + a + " b = " + b + "<br/>"); // b = 9 , a = 9
