class WildDog extends Dog {
    constructor(name, age, color, breed, weight) {
        super(name, age, color, breed);
        this.weight = weight;
    }
    // // method override
    // display(): void {
    //   document.write(`Name: ${this.name}, Age: ${this.age}, Breed: ${this.breed}, Weight: ${this.weight}</br>`);
    // }
    // method override
    display() {
        super.display();
        document.write(`Weight: ${this.weight}</br>`);
    }
    bark() {
        alert('Hwoooooo!');
    }
}
