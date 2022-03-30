var a = false; // boolean
var b = 0; // number

if (a == b) {
  // Abstract Comparison
  document.write("false equal to 0 <br/>");
} else {
  document.write("false not equal 0 <br/>");
}

var a = ""; // string
var b = 0; // number
// Abstract Comparison
if (a == b) {
  document.write("empty string equal to 0 <br/>");
} else {
  document.write("empty string not equal 0 <br/>");
}

document.write("Using strict Comparison: <br/>");

var a = false; // boolean
var b = 0; // number

//if (typeof a == typeof b && a == b)
if (a === b) {
  // Strict Comparison
  document.write("false equal to 0 <br/>");
} else {
  document.write("false not equal 0 <br/>");
}

var a = ""; // string
var b = 0; // number
// Strict Comparison
if (a === b) {
  document.write("empty string equal to 0 <br/>");
} else {
  document.write("empty string not equal 0 <br/>");
}
