class Dog {
    constructor(name, age, color, breed) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.breed = breed;
    }
    addYears(years) {
        this.age += years;
    }
    sleep(hours) {
        document.write(`${this.name} is sleeping for ${hours}...</br>`);
    }
    eat() {
        // this.breed = 'Boxer'; // Error
        document.write(`${this.name} is eating...</br>`);
    }
    happyBirthday() {
        //Advenced the dog age by 1, and print the dog age
        this.addYears(1);
        document.write(`Happy Birthday!! ${this.name} is ${this.age} years old </br>`);
    }
    display() {
        document.write(`Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Breed: ${this.breed}</br>`);
    }
}
