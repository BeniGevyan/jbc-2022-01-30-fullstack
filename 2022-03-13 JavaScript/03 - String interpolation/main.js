document.write("This is a string...<br/>");
document.write('This is a string...<br/>');
document.write(`This is a string...<br/>`);


var num1 = 10;
var num2 = 20;

var sum = num1 + num2;


document.write(num1 + " + " + num2 + " = " + sum + "<br/>"); // 10 + 20 = 30
document.write(num1 + " * " + num2 + " = " + (num1 * num2) + "<br/>"); // 10 * 20 = 200

document.write("<hr/>");

document.write(`${num1} + ${num2} = ${sum}<br/>`);
document.write(`${num1} * ${num2} = ${num1 * num2}<br/>`);