var car = {
  maker: "Alfa Romeo",
  model: "Julia",
  color: "red",
  year: 1982,
};

for (var prop in car) {
  document.write(prop + "-->" + car[prop] + "<br/>");
}
