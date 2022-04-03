function printMessage(msg, times) {
  for (let i = 1; i <= times; i++) {
    document.write(`${msg}<br/>`);
  }
}

printMessage("Hi", 5);

//  מיותר לשמור בתוך result, הפונקציה לא מחזירה דבר
const result = printMessage("hi", 8);

console.log(result);
