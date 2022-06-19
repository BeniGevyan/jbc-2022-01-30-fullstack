class Dog extends Animal {
  color: string;

  constructor(name: string, age: number, color: string) {
    super(name, age);
    this.color = color;
  }

  display(): void {
    super.display();
    document.write(`Color: ${this.color}<br/>`);
  }

  makeSound(): void {
    alert('Woof Woof!');
  }
}
