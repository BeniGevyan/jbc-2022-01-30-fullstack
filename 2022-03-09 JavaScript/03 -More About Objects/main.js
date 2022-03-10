var dog = {
  name: "Rexy",
  age: 4,
};

document.write("Name: " + dog.name + "<br/>");
document.write("Age: " + dog.age + "<br/>");
document.write("Color: " + dog.color + "<br/>");

document.write("<hr>");

// change exsiting property
dog.name = "Buki";
dog.age = 5;

// define and set new property
dog.color = "white";

document.write("Name: " + dog.name + "<br/>");
document.write("Age: " + dog.age + "<br/>");
document.write("Color: " + dog.color + "<br/>");

document.write("<hr>");
// another syntax to access objects property:
document.write("Name: " + dog["name"] + "<br/>");
dog["name"] = "Oscar";
document.write("Name: " + dog["name"] + "<br/>");

document.write("<hr>");

// delete Object's property
delete dog.color;
delete dog.age;

document.write("Name: " + dog.name + "<br/>");
document.write("Age: " + dog.age + "<br/>"); // undefined
document.write("Color: " + dog.color + "<br/>"); // undefined

console.log(dog);
