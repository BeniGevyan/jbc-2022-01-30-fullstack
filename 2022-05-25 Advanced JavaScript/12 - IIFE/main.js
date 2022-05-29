(() => {
  var myDog = 'Rexy';

  console.log(myDog);
  console.log(window.myDog);

  function myCoolFunction() {
    alert('my');
  }

  myCoolFunction();

  console.log(window.myCoolFunction);
})();
