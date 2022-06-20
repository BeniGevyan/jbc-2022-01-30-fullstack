let myDog: Dog;
myDog = new Dog('Booki', 8, 'Brown');
myDog.display();
console.log('The color is ' + myDog.color);

let myDog2: Animal;
myDog2 = new Dog('Rexy', 5, 'White');
myDog2.display();
console.log('dog 2 the color is ' + (myDog2 as Dog).color);
