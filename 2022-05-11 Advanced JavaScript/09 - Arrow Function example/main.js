function doWork1(callback) {
  callback();
}

function doWork2(callback) {
  callback(1, 2, 3);
}

function doWork3(callback) {
  callback('Hello');
}

function test() {
  // 1. call doWork1 using anoymous function
  doWork1(function () {
    document.write('First Call<br/>');
  });

  // 2. call doWork1 using arrow function
  doWork1(() => {
    document.write('Second Call<br/>');
  });

  // 3. call doWork2 using anonymous function
  doWork2(function (a, b, c) {
    document.write('Third Call, Sum: ' + (a + b + c) + '<br/>');
  });

  // 4. call doWork2 using arrow function
  doWork2((a, b, c) => {
    document.write('Forth Call, Sum: ' + (a + b + c) + '<br/>');
  });

  // 5. call doWork3 using anonymous function
  doWork3(function (str) {
    document.write('Fifth Call, str: ' + str + '<br/>');
  });

  // 6. call doWork3 using arrow function
  doWork3((str) => {
    document.write('Sixth Call, str: ' + str + '<br/>');
  });
}

function onWindowLoad() {
  const btn1 = document.querySelector('#btn1');
  btn1.onclick = test;
}

window.onload = onWindowLoad;
