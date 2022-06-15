class WildDog extends Dog {
  weight: number;

  constructor(name: string, age: number, color: string, breed: string, weight: number) {
    super(name, age, color, breed);
    this.weight = weight;
  }

  // // method override
  // display(): void {
  //   document.write(`Name: ${this.name}, Age: ${this.age}, Breed: ${this.breed}, Weight: ${this.weight}</br>`);
  // }

  // method override
  display(): void {
    super.display();
    document.write(`Weight: ${this.weight}</br>`);
  }

  bark(): void {
    alert('Hwoooooo!');
  }
}
