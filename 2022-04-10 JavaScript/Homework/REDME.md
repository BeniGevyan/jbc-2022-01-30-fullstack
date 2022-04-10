# Homework

## JavaScript Validation

1. Create a webpage with input for getting first name and a button.  
   When the user clicks on the button, display an alert with the input's value.  
   If the input is empty, display an alert with an error message.

2. Create a webpage with input for getting first name and a button.  
   When the user clicks on the button, display an alert with the input's value.  
   If the input is empty, display an alert with an error message and change the input border color to red.  
   Note - if the user fixes the error, return the input to its original color.

3. Create a webpage with input for getting first name and a button.  
   When the user clicks on the button, display an alert with the input's value.  
   If the input is empty, display a span with error text near the input and change the input border color to red.  
   Note - if the user fixes the error, return the input to its original color and do not show the span.

4. Create a webpage with two inputs for getting first and last names and a button.  
   When the user clicks on the button, display an alert with the full name.  
   If one of the inputs is empty, display a span with error text near the input and change the input border color to red.  
   Note - if the user fixes the error, return the input to its original color and do not show the span.

5. Create a webpage with three inputs for getting first and last name, email, and a button.  
   When the user clicks on the button, display an alert with the full name and the email.  
   If one of the inputs is empty, display a span with error text near the input and change the input border color to red.  
   Note - if the user fixes the error, return the input to its original color and do not show the span.

6. Create a webpage with three inputs for getting first and last name, email, and a button.  
   When the user clicks on the button, display an alert with the full name and the email.  
   If one of the inputs is empty, display a span with error text near the input and change the input border color to red.  
   If one of the inputs has a value of fewer than 2 characters, display a span with appropriate error text near the input and change the input border color to red.  
   If one of the inputs has a value of more than 20 characters, display a span with appropriate error text near the input and change the input border color to red.  
   Note - if the user fixes the error, return the input to its original color and do not show the span.

7. Add JavaScript validations to the Pet Store website you created in your homework [here](https://github.com/barsheshet/jbc-2022-01-30-fullstack/tree/main/2022-02-09%20CSS/Homework#2-pet-store).  
   All inputs, select, and textarea must not be empty.  
   If the form is invalid (empty input/select/textarea), mark it with red border color and display an alert with appropriate error message.  
   If the form is invalid, do not go to `save.html` page.

## HTML 5 Validation

1. Create a webpage with:

- input for getting first name.
- input for getting last name.
- input for getting email.
- input for getting phone number.
- textarea for getting a message.  
  Use HTML 5 validation to validate that:
- first name, last name, and email are mandatory (must not be empty).
- all inputs and textarea must have a value of at least 2 characters long.
- all inputs must have a value of 20 characters long at most.
- textarea must have a value of 500 characters long at most.  
  If the form is valid, the browser should go to `save.html`.

## Canvas

1. Create a webpage with a canvas and a button.  
   When the user clicks on the button, draw a random sized circle in a random position with random color (between 5 colors).

2. Create a webpage with a canvas and a button.  
   When the user clicks on the button, draw 100 random sized circles in random positions with random colors (between 5 colors).

3. Create a webpage with a canvas and a button.  
   When the user clicks on the button, draw a random sized rectangle in a random position with random color (between 5 colors).

4. Create a webpage with a canvas and a button.  
   When the user clicks on the button, use prompt to get a number `count` from the user.  
   Draw `count` random sized rectangle in a random position with random color (between 5 colors).

5. Create a webpage with:

- input for getting position `x`.
- input for getting position `y`.
- input for getting width `w`.
- input for getting height `h`.
- select for getting color `c`.
- button.
- canvas.  
  When the user clicks on the button, draw a rectangle in position `(x, y)`, `w` width, `h` height, and `c` color.

6. Add JavaScript validation to the above task.  
   If one of the inputs/select is empty, do not draw the rectangle, mark the input in red and display an alert with an error message.

## XML

1. Create `cars.xml` file with cars.  
   Each car has: id, manufacturer, model, year, and price.  
   Add a currency attribute to price tag.
   Make sure you `XML` file is valid using [this website](https://www.xmlvalidation.com)

## JSON

1. Create a "Hard-coded" array of objects named `books`.  
   Each book has the following properties: id, name, author, and price.  
   Convert this array into JSON string and display it using alert.  
   Convert the JSON string back into an array named `items`.  
   Display `books` and `items` using console. Are they the same?  
   Display `items` on the document in the following format:

```
Book ID: ____
Book Name: ____
Book Author: ____
Book Price: ____
--------------------
Book ID: ____
Book Name: ____
Book Author: ____
Book Price: ____
--------------------
Book ID: ____
Book Name: ____
Book Author: ____
Book Price: ____
--------------------
```

2. Create an object named `myDog`.  
   The dog has the following properties: name, age, color, isNeutered (boolean).  
   Convert this object into JSON string and display it using alert.  
   Convert this JSON string back into an object named `yourDog`.  
   Display `yourDog` on the document in the following format:

```
Name: ____
Age: ____
Color: ____
Is Neutered: ____
```

## Web Storage

1. Create a webpage with input for getting email, save button, and load button.  
   When the user clicks on the save button, save the email on a **non-persistent** cookie.  
   When the user clicks on the load button, load the email from the cookie and display it using an alert (only the email).  
   Check whether the cookie exists after closing and re-opening the tab.

2. Create a webpage with input for getting phone number, save button, and load button.  
   When the user clicks on the save button, save the phone number on a **persistent** cookie.  
   When the user clicks on the load button, load the phone number from the cookie and display it using an alert (only the phone number).  
   Check whether the cookie exists after closing and re-opening the tab.

3. Create a webpage with two inputs for getting first and last name, a save button, and a load button.  
   When the user clicks on the save button, save the first and last name as separate values in the **session storage**.  
   When the user clicks on the load button, load the first and last name from the session storage and display the full name using alert.  
   Check whether the first and last name exists in session storage after closing and re-opening the tab.

4. Create a webpage with four inputs for getting address (street, number, city, and state), save button, and load button.  
   When the user clicks on the save button, save the address (as an object converted into JSON string) in the **local storage**.  
   When the user clicks on the load button, load each address property back into its input.  
   Check whether the address exists in local storage after closing and re-opening the tab.

5. Add JavaScript validation to the task above.  
   If one of the inputs is empty, show a span with red error text near the input and mark it in red.

6. **Challenge** - Create a webpage with a select of colors.  
   When the user selects one of the colors, make the webpage background color like the selected color.  
   When the user closes the tab and then re-opens it, the color from the last time should be selected and the webpage background color should also be the selected color.
