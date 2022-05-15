# Homework

1. Display the word `Start`, then the current time, then the word `End`.  
This is what the screen should look like:  
```
Start
(current time)
End
```  

2. Do it again, this time - display the current time after a `3` seconds delay.  
This is what the screen should look like:  
```
Start
End
(current time)
```

3. Do it again, this time - instead of the current time, display the time `3` seconds ago.  
This is what the screen should look like:
```
Start
End
(the time 3 seconds ago)
```

4. Display the word `Start`, then after `3` seconds a random number between `0` and `100`,  
then after `5` seconds a random number between `0` and `100`,  
then after `5` seconds a random number between `0` and `100`,  
then the word `End`.  
This is what the screen should look like:  
```
Start
End
(random number between 0 and 100)
(random number between 0 and 100)
(random number between 0 and 100)
```

5. Create a webpage with an input of type number and a div.  
Every second, display a random number between `0` and the input value.  
Is it possible for the user to change the input value so that the random number upper limit gets updated accordingly?  

6. Create a webpage with a background color that changes to a random color every second.  

7. Create a functions named `getRandomNumberAfterDelay`.  
This function generates a random number between `0` and `100` after a `5` seconds delay (use `setTimeout` with a callback arrow function).  
The function "returns" the number with a callback arrow function.  
Create a button that when clicked on displays the random number with an alert.  

8. Create a functions named `getRandomNumberAfterDelay`.  
This function generates a random number between `0` and `limit` after a `5` seconds delay.  
`limit` is an additional argument that `getRandomNumberAfterDelay` gets.    
The function "returns" the number with a callback arrow function.  
Create a button that when clicked on displays the random number with an alert.  

9. Create a functions named `getRandomNumberAfterDelay`.  
This function generates a random number between `first` and `last` after a `5` seconds delay.  
`first` and `last` are aditional arguments that `getRandomNumberAfterDelay` gets.    
The function "returns" the number with a callback arrow function.  
Create a button that when clicked on displays the random number with an alert.


10. Create a functions named `getEvenRandomNumberAfterDelay`.  
This function generates an even random number between `first` and `last` after a `5` seconds delay.  
`first` and `last` are aditional arguments that `getEvenRandomNumberAfterDelay` gets.      
The function "returns" the number with a callback arrow function.  
Create a button that when clicked on displays the random number with an alert.

11. Here is a function that **simulates** getting a user from the server:  
```js
function getUserFromServer() {
  setTimeout(() => {
  // Demo for getting user from the server:
  const user = { firstName: "Moishe", lastName: "Ufnik" };
  // "Return" that user to the calling code.
  }, 4000);
}
```  
Call this function to get the user from the server and display the user on the console.  
Of course, to do that, you will have to change/add code.  


12. Here is a function that **simulates** getting a grades from the server:  
```js
function getGradesFromServer() {
  setTimeout(() => {
  // Demo for getting grades from the server:
  const grades = [100, 98, 75, 80, 100, 87];
  // "Return" that array to the calling code.
  }, 7000);
}
```  
Call this function to get the grades from the server and display the user on the screen.  
Of course, to do that, you will have to change/add code. 

13. Create a webpage with a button that when clicked on, displays the user position (longitude, latitude) inside a span.  
If there was an error, display the error.  

14. Build a clock - display the time inside a span (the time updates every second).  
Add code that changes the font color of the time to random color every second.