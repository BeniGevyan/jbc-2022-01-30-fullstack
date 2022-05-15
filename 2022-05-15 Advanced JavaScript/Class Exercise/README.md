# Class Exercise

1. Create three string variables with a text sentence you like.  
Display on the screen each sentence after a random time between `3` and `7` seconds.  

2. Create five string variables with a text sentence you like.  
Display on the screen a random sentence between the five every `1` second.  

3. Create a functions named `getRandomNumberAfterDelay`.  
This function generates a random number after a `3` seconds delay (use `setTimeout` with a callback arrow function).  
The function "returns" the number with a callback arrow function.  
Create a button that when clicked on displays the the random number with an alert.  

4. Continue task 3. -  
in the `setTimeout` a callback, if the number is odd run: `Math.PI.toFixed(1)`, else run `Math.PI.toFixed(-1)`.  
This code might crash. Handle the error with `try-catch` and `errorCallback`.  
When the button is clicked, display the error or the random number using an alert. 