class Dog {
  color: string;

  constructor(name: string, age: number, color: string) {
    this.color = color;
  }

  display(): void {
    document.write(`Color: ${this.color}<br/>`);
  }

  makeSound(): void {
    alert('Woof Woof!');
  }
}
