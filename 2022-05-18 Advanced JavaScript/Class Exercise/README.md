# Class Exercise

1. Create a function named `getRandomColorAfterDelay`.  
   This function should generate a random color between red, blue, green, white, grey, and black after a `3` seconds delay.  
   The function should return a Promise.  
   If the random color is black, the Promise should reject with an error.
   Else, the Promise should resolve with a random color.  
   Create a webpage with a button that when clicked on, changes the background color of the page to a random color.

2. Promisify the browser's `getCurrentPosition` function -  
   Create a function named `getCurrentPositionAsync` what uses `getCurrentPosition` and returns a Promise.  
   If `getCurrentPosition` succeeded, the Promise should resolve to the location.  
   Else, the promise should reject with the error.

3. Invoke the above functions using `Async-Await`.
