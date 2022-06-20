let myDog = new Dog('Booki', 4, 'White');

myDog.display();

let myDog2 = myDog;

myDog2.color = 'Black';

myDog.display();
myDog2.display();

let obj = {
  foo: 'bar',
};

let obj2 = obj;

let myDog3 = new Dog('Booki', 4, 'White');
myDog3.color = myDog.color;

if (myDog === myDog3) {
  alert('Equals!');
} else {
  alert('Not Equals!');
}

if (myDog === myDog2) {
  alert('Equals!');
} else {
  alert('Not Equals!');
}
