const randomNumber = Math.random();

if (randomNumber < 0.5) {
  const dog = new Dog('Booki', 6, 'Brown');
  dog.display();
  console.log('Color: ' + dog.color);
} else {
  const bunny = new Bunny('Bugs', 50, 'male');
  bunny.display();
  console.log('Gender: ' + bunny.gender);
}

let myAnimal: Animal;

if (randomNumber < 0.5) {
  myAnimal = new Dog('Booki', 6, 'Brown');
} else {
  myAnimal = new Bunny('Bugs', 50, 'male');
}

myAnimal.display();

if (myAnimal instanceof Dog) {
  console.log('Color: ' + myAnimal.color);
} else {
  console.log('Gender: ' + (myAnimal as Bunny).gender);
}
