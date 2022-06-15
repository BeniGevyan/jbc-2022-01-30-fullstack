const dog1 = new Dog('Rexy', 7, 'black', 'German Sheperd');
// alert(dog1.color); // Error
// dog1.addYears(4); // Error
dog1.name = 'Charlie';
// dog1.breed = 'Chiuwauwa'; // Error
alert(dog1.breed);
dog1.display();
dog1.sleep(2);
dog1.eat();
dog1.happyBirthday();

document.write('<hr/>');

const dog2 = new Dog('Booki', 12, 'white', 'Jack Russel');
dog2.display();
dog2.sleep(8);
dog2.eat();
dog2.happyBirthday();
