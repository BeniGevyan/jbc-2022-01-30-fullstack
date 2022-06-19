class Bunny extends Animal {
  gender: string;

  constructor(name: string, age: number, gender: string) {
    super(name, age);
    this.gender = gender;
  }

  display(): void {
    super.display();
    document.write(`Gender: ${this.gender}<br/>`);
  }
}
