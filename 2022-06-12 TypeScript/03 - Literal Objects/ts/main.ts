let dog = {
  name: 'Rexy',
  age: 4,
};

dog.name = 'Buki'; // OK
// dog.name = 123; // Error
// dog.color = "White"; // Error

dog = {
  name: 'Humi',
  age: 10,
};

// dog = { myName: 'Humi', age: 13 }; // Error

// dog = { name: 'Humi' }; // Error

let cat: { name: string; age?: number };

cat = { name: 'Mitzi' };
cat = { name: 'Kitzi', age: 6 };
// cat = { age: 6}; // Error
