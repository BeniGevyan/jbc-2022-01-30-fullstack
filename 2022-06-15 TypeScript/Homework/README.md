# Homework

1. Create a class named `Book`.  
   The class has the following data members: `name`, `author`, `publisher`, and `price`.  
   The class has the following methods: a constructor, a method for displaying book details on the page, and a method to return the VAT (17% of the price).  
   In the `main.ts` file, create 3 book instances with different values, display the book's details, and display the book's VAT.

2. Create a class named `Car`.
   Data members: `year`, `model`, `color`, `price`, and `transmission` (auto/manual).  
   Methods: constructor, display on the page, and a method to return VAT.
   In the `main.ts` file, create 2 cars with different values, display them on the page, and display their VAT on the page.

3. Create a class named `Employee`.
   Data members: `firstName`, `lastName`, `address`, and `salary`.  
   Methods: constructor, display on the page, and a method to return tax (10% of salary).
   In the `main.ts` file, create 2 employees with different values, display them on the page, and display their tax on the page.

4. Create a class named `Speaker`.  
   Data Members: `color`, `volume`.  
   Methods:

   - constructor
   - turn on (display a string saying the speaker is on)
   - turn off (display a string saying the speaker is off)
   - test sound (display "Beep")
   - display (display the instance details)  
     In the `main.ts` Create two instances, call each of their methods and display their details.

5. Create a class named `Speaker`.  
   Data Members: `color` (only Black, White, and Grey are valid), `volume` (only number between `0` and `10` is valid).  
   Methods:

   - constructor
   - Getters & Setters
   - turn on (display a string saying the speaker is on)
   - turn off (display a string saying the speaker is off)
   - test sound (display "Beep")
   - display (display the instance details)  
     In the `main.ts` Create two instances, call each of their methods and display their details.  
     What happens if trying to assign invalid values?

6. Create a class named `Flashlight`.  
   Data Members:

   - `color` (can be any color),
   - `length` (only less than `50` positive number is valid).
   - `lightLevel` (only less than `10` positive number is valid).
   - `numberOfBatteries` (only less than `5` positive integer number is valid).
     Methods:
   - constructor
   - Getters & Setters
   - turn on (display a string saying the speaker is on)
   - turn off (display a string saying the speaker is off)
   - change batteries (display "Changing batteries...")
   - display (display the instance details)  
     In the `main.ts` Create two instances, call each of their methods and display their details.  
     What happens if trying to assign invalid values?

7. Create a class named `RacingCar` that inherits from `Car` in task 2.
   Additional Data Members:

   - `maxSpeed` (a number between `200` and `500`),
   - `numberOfRaces` (only less than `100` positive integer number is valid).
     Methods:
   - constructor
   - Getters & Setters
   - display (display the instance details)  
     In the `main.ts` Create two instances - one car and one racing car, call each of their methods and display their details.

8. Software for stock management is needed for a musical instruments store.  
   The store has the following musical instruments:

   - Gittar: `model`, `manufacturer`, `color`, `numberOfStrings` (between `4` and `8` strings only).
   - Drum: `model`, `manufacturer`, `color`, `diameter` (a positive number).
   - Piano: `model`, `manufacturer`, `color`, `numberOfKeys` (between `20` and `150` strings only).
   - Wing Piano: `model`, `manufacturer`, `color`, `numberOfKeys` (between `20` and `150` strings only), `length` (a positive number).  
     Each class has a constructor, Getters & Setters, display, and make a sound (each instrument has a unique sound).  
     Create one instance of each instrument, and invoke all methods to test that everything works.
