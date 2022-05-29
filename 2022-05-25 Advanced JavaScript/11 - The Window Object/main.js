// all global vars and functions goes to window object - problem!!

var myDog = 'Rexy';

console.log(myDog);
console.log(window.myDog);

function myCoolFunction() {
  alert('');
}

console.log(window.myCoolFunction);
