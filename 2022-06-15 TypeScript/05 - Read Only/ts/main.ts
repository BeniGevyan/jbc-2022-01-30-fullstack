const dog1 = new Dog('Rexy', 7, 'black');
// alert(dog1.color); // Error
// dog1.addYears(4); // Error
dog1.display();
dog1.sleep(2);
dog1.eat();
dog1.happyBirthday();

document.write('<hr/>');

const dog2 = new Dog('Booki', 12, 'white');
dog2.display();
dog2.sleep(8);
dog2.eat();
dog2.happyBirthday();
