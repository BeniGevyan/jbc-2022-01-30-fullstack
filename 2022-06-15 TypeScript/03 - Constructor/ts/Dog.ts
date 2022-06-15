class Dog {
  // Data Members
  name: string;
  age: number;
  color?: string;

  constructor(name: string, age: number, color?: string) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  sleep(hours: number): void {
    document.write(`${this.name} is sleeping for ${hours}...</br>`);
  }

  eat(): void {
    document.write(`${this.name} is eating...</br>`);
  }

  happyBirthday(): void {
    //Advenced the dog age by 1, and print the dog age
    this.age++;
    document.write(`Happy Birthday!! ${this.name} is ${this.age} years old </br>`);
  }

  display(): void {
    document.write(`Name: ${this.name}, Age: ${this.age}, Color: ${this.color ? this.color : 'Unknown color'}</br>`);
  }
}
