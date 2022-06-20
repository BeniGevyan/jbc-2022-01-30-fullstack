class Dog {
    constructor(name, age, color) {
        this.color = color;
    }
    display() {
        document.write(`Color: ${this.color}<br/>`);
    }
    makeSound() {
        alert('Woof Woof!');
    }
}
