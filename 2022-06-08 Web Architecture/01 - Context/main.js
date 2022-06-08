document.querySelector('#btn1').onclick = function () {
  alert('button 1');
};

document.querySelector('#btn2').onclick = () => {
  alert('button 2');
};

document.querySelector('#btn3').onclick = function () {
  this.style.backgroundColor = 'red';
  console.log(this);
  console.dir(this);
};

document.querySelector('#btn4').onclick = () => {
  this.style.backgroundColor = 'red'; // will not work - arrow function doesn't have context (this)
};

document.querySelector('#btn5').onclick = function () {
  setTimeout(function () {
    alert('button 5');
  }, 1000);
};

document.querySelector('#btn6').onclick = function () {
  setTimeout(() => {
    alert('button 6');
  }, 1000);
};

document.querySelector('#btn7').onclick = function () {
  setTimeout(function () {
    this.style.backgroundColor = 'red'; // the context here is not the button
    alert('button 7');
  }, 1000);
};

document.querySelector('#btn8').onclick = function () {
  setTimeout(() => {
    this.style.backgroundColor = 'red';
    alert('button 8');
  }, 1000);
};

document.querySelector('#btn9').onclick = function () {
  setTimeout(
    function () {
      this.style.backgroundColor = 'red';
      alert('button 9');
    }.bind(this),
    1000,
  );
};

document.querySelector('#btn10').onclick = function () {
  const that = this; // self, _this, me, that
  setTimeout(function () {
    that.style.backgroundColor = 'red';
    alert('button 10');
  }, 1000);
};
