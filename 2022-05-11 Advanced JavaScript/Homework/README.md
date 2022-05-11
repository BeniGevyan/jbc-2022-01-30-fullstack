# Homework

## Create JavaScript for the following tasks, solve each task once by using Anonymous Function, and once by using Arrow Function

1. Create a function `displayMyName` that displays your name on the screen.  
   Create another function that gets a callback function `callback` as an argument and invokes it like this: `callback();`.  
   Invoke the second function and pass `displayMyName` as an argument.

2. Here is a function:

```js
function cool(callback) {
  callback();
}
```

Invoke it and pass it as an argument a function that displays a random number on the screen.

3. Here is a function:

```js
function nice(callback) {
  callback(42);
}
```

Invoke it and pass it as an argument a function that displays the number it gets as an argument on the screen.

4. Here is a function:

```js
function amazing(callback) {
  const num = callback(42, 128, 37, 81, 66);
  document.write('Num: ' + num);
}
```

Invoke it and pass it as an argument a function that gets 5 numbers as arguments, displays one of the numbers (randomly) on the screen, and returns that number.

5.  Here is a function:

```js
function nice(paintCallback) {
  paintCallback();
}
```

Invoke it and pass it as an argument a function that sets the background color of the screen to a random color.

6.  Here is a function:

```js
function nice(paintCallback) {
  paintCallback('green');
}
```

Invoke it and pass it as an argument a function that sets the background color of the screen to the color it gets as an argument.

7.  Here is a function:

```js
function nice(paintCallback) {
  const paintedColor = paintCallback('green', 'red', 'blue');
  document.write('Painted Color: ' + paintedColor);
}
```

Invoke it and pass it as an argument a function that gets three colors as arguments and sets the background color of the screen to one of the colors (randomly), and returns that color.

8. Display on the screen every second a random number between `1` and `100` (inclusive).

9. Change the background color of the screen every second to a random one. It can be a random color selected from a list of colors, or entirely random. It is up to you.

10. Display on the screen every 3 seconds an array full of 100 random numbers.
