var fruites = [];

fruites.push("Banana");
fruites.push("Apple");
fruites.push("Orange");
fruites.push("Peach");

document.write("First fruite: " + fruites[0] + "<br/>");
document.write("Second fruite: " + fruites[1] + "<br/>");
document.write("Third fruite: " + fruites[2] + "<br/>");
document.write("Forth fruite: " + fruites[3] + "<br/>");

for (var i = 0; i < fruites.length; i = i + 1) {
  document.write(fruites[i] + " | ");
}
