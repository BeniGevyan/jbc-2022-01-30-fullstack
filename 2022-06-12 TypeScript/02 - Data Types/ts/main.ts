let a = 100;
a = 200; //OK
// a = 'Hi'; //Error

let b = 'Hi';
b = 'Bye'; // OK
//b = 100;  // Error

let c;
c = 100; // OK
c = 200; // OK
c = 'Hello'; // OK

let d: number;
d = 100; // OK
d = 200; // OK
//d = "Hello"; // Error

let e: any;
e = 100; // OK
e = 200; // OK
e = 'Hello'; // OK

let f: number = 100;
f = 200; // OK
// f = 'hello'; // Error

let g: number | string | boolean;
g = 10; // OK
g = true; // OK
g = 'Hi'; // OK
// g = { name: 'Rexy', age: 5 }; // Error
