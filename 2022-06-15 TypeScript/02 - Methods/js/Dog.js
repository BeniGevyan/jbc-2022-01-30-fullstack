class Dog {
    sleep(hours) {
        document.write(`${this.name} is sleeping for ${hours}...</br>`);
    }
    eat() {
        document.write(`${this.name} is eating...</br>`);
    }
    happyBirthday() {
        //Advenced the dog age by 1, and print the dog age
        this.age++;
        document.write(`Happy Birthday!! ${this.name} is ${this.age} years old </br>`);
    }
    display() {
        document.write(`Name: ${this.name}, Age: ${this.age}</br>`);
    }
}
