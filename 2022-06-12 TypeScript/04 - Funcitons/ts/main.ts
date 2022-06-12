function doSomething(a: number, b: string, c?: boolean) {
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
}

doSomething(123, 'Hi', true);
doSomething(123, 'Hi');
// doSomething(123, 765); // Error
// doSomething(100); // Error
// doSomething(123, 'Hi', true, 20); // Error

function multiply(a: number, b: number): number {
  const mul = a * b;
  return mul;
}

let result = multiply(10, 20);
result = 20;
// result = 'Hello'; // Error

function greet() {
  return 'Hello';
}

const val = greet(); // Infered Type

function doAlert(): void {
  alert('Hello');
}
