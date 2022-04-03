// first way
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

// second way
function isEven2(num) {
  return num % 2 === 0 ? true : false;
}

// third way
function isEven3(num) {
  return num % 2 === 0;
}

const num = 13;

if (isEven3(num)) {
  alert("Even");
} else {
  alert("Odd");
}
