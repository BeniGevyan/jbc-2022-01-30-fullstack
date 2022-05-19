# Homework

## for each one of the following tasks, write 2 solutions: with `then().catch()` and with `Async-Await`

1. Create a function named `generate7BoomAfterDelayAsync`.  
   This function gets 2 numbers as arguments `min`, and `max` and returns a Promise.  
   The function needs to generate a random number between `min` and `max` after a 1 second delay.  
   If the random number can be divided by 7 without a reminder, the Promise must be resolved with the number.  
   Else, the Promise must be rejected with an error.  
   Create a webpage with 2 inputs for `min` and `max` and a button.  
   When the button is clicked, use `generate7BoomAfterDelayAsync` and display the number or error.

2. Create a function named `generatePrimeNumberAfterDelayAsync`.  
   This function gets 2 numbers as arguments `min`, and `max` and returns a Promise.  
   The function needs to generate a random number between `min` and `max` after a 1 second delay.  
   If the random number is prime, the Promise must be resolved with the number.  
   Else, the Promise must be rejected with an error.  
   Create a webpage with 2 inputs for `min` and `max` and a button.  
   When the button is clicked, use `generatePrimeNumberAfterDelayAsync` and display the number or error.

3. Create a function named `generateCuteAnimalAfterDelayAsync`.  
   This function gets no arguments and returns a Promise.  
   The function needs to generate a random animal between kitten, puppy, bunny, scorpion, spider, and cockroach after a 1 second delay.  
   If the random animal is cute the Promise must be resolved with the animal.  
   Else, the Promise must be rejected with an error.  
   Create a webpage with a button.  
   When the button is clicked, use `generateCuteAnimalAfterDelayAsync` and display the cute animal or error.

4. Create a function named `generateWorkingDayAfterDelayAsync`.  
   This function gets no arguments and returns a Promise.  
   The function needs to generate a random day between the weekdays after a 1 second delay.  
   If the random day is a workday (Sunday...Thursday) the Promise must be resolved with the day.  
   Else, the Promise must be rejected with an error.  
   Create a webpage with a button.  
   When the button is clicked, use `generateWorkingDayAfterDelayAsync` and display the day or error.

5. Create a function named `getArrayFromServerAsync`.  
   This function gets one argument `size` and returns a Promise.  
   The function needs to generate a random number `n` after a 1 second delay.  
   If the random number is even, generate an array of size `size` full of random numbers and the Promise must be resolved with this array.  
   Else, the Promise must be rejected with an error.  
   Create a webpage with input for `size` and a button.  
   When the button is clicked, use `getArrayFromServerAsync` and display the array or error.

6. Create a function named `getPizzaFromServerAsync`.  
   This function gets no arguments and returns a Promise.  
   The function needs to generate a random number `n` after a 1 second delay.  
   If the random number is even, generate a `pizza` object that has the following properties:  
   `diameter` (a random number between `10` and `10`), `price` (a random number between `10` and `10`), and `toppings` (a random number between `10` and `10`).  
   the Promise must be resolved with this pizza object.  
   Else, the Promise must be rejected with an error.  
   Create a webpage with a button.  
   When the button is clicked, use `getPizzaFromServerAsync` and display the pizza or error.

7. **Challenge** - Create a function named `generateStrongPasswordAsync`.  
   This function gets no arguments and returns a Promise.  
   The function needs to generate a random 6 characters long password that may contain uppercase letters, lowercase letters, and digits after a 1 second delay.  
   If the random password includes at least one uppercase letter, one lowercase letter, and one digit the Promise must be resolved with the password.  
   Else, the Promise must be rejected with an error.  
   Create a webpage with a button.  
   When the button is clicked, use `generateStrongPasswordAsync` and display the cute animal or error.
