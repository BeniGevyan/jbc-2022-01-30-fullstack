class Dog {
  // Data Members
  name: string; // all data members are public by default
  public age: number;
  private color: string;

  public constructor(name: string, age: number, color: string) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  private addYears(years: number): void {
    this.age += years;
  }

  public sleep(hours: number): void {
    document.write(`${this.name} is sleeping for ${hours}...</br>`);
  }

  public eat(): void {
    document.write(`${this.name} is eating...</br>`);
  }

  public happyBirthday(): void {
    //Advenced the dog age by 1, and print the dog age
    this.addYears(1);
    document.write(`Happy Birthday!! ${this.name} is ${this.age} years old </br>`);
  }

  public display(): void {
    document.write(`Name: ${this.name}, Age: ${this.age}, Color: ${this.color}</br>`);
  }
}
