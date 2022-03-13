var a = 100;
document.write(`Value: ${a}, Type: ${typeof a} <br/>`);

var b = "Hello";
document.write(`Value: ${b}, Type: ${typeof b} <br/>`);

var c = true;
document.write(`Value: ${c}, Type: ${typeof c} <br/>`);

var d = { name: "Rexy", age: 5 };
document.write(`Value: ${d}, Type: ${typeof d} <br/>`);
document.write(`Is Array: ${Array.isArray(d)} <br/>`);

var e = [10, 20, 30, 40];
document.write(`Value: ${e}, Type: ${typeof e} <br/>`);
document.write(`Is Array: ${Array.isArray(e)} <br/>`);

var f = document.write;
document.write(`Value: ${f}, Type: ${typeof f} <br/>`);

var g;
document.write(`Value: ${g}, Type: ${typeof g} <br/>`);

var h = null;
document.write(`Value: ${h}, Type: ${typeof h} <br/>`);
