# CSS


## css syntax

```
selector {
  property: value;
  ...
  ...
}
```

```css
p {
  text-align: center;
  color: black;
}
```

## types of values

1. color - RGB `rgb(155,65, 42)`, Hexadecimal `#ff6347`, color name `green`
2. keyword - `pointer`, `x-large`
3. measure - `50px`, `1.5em`
4. URL - `url(https://foo.com)`


## ways to apply CSS

1. inline  
```html
<p style="color:#8a2be2; font-size: x-large; cursor: help;">Some paragraph...</p>
```

2. embedded
```html
<html>
  <head>
  <style>
    p {
      color: crimson;
      font-size: larger;
      background-color: darkgray;
    }
  </style>
</head>
<body>
  ...
  ...
```

3. external  
```html
<html>
<head>
  <link rel="stylesheet" href="./styles.css"/>
</head>
<body>
  ...
  ...
```

## who is winning?
1. inline
2. embedded
3. external


## span & div
span - helps to apply style on inline elements
div - helps to apply style on block elements

# Selectors

1. Element Name Selector  
```css
p {
    font-size: x-large;
}
```

2. Class Selector
```css
.beautiful {
    color: blue;
    font-style: italic;
}
```

3. ID Selector
```css
#lastParagraph {
    background-color: green;
    color: brown;
}
```

