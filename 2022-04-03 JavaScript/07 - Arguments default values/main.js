function printMessage(msg = "No Message :)", times = 1) {
  for (let i = 1; i <= times; i++) {
    document.write(`${msg}<br/>`);
  }
}

printMessage("Hi", 5);
printMessage("Hello");
printMessage();
printMessage(undefined, 3);
