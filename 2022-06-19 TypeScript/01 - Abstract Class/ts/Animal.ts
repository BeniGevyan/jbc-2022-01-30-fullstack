abstract class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }

  display(): void {
    document.write(`Name: ${this.name}, Age: ${this.age}`);
  }
}
