function saySomething(message) {
  document.write(message + "<br/>");
}

saySomething("Hello All!");
saySomething("Bye Bye");

function duplicateMessage(message, timesToDuplicate) {
  for (let i = 1; i <= timesToDuplicate; i++) {
    // document.write(message + "<br/>");
    saySomething(message);
  }
}

duplicateMessage("You are amazing!", 5);
duplicateMessage("Cool code :-)!", 7);

const messageFromUser = prompt("Enter a message:");
const times = +prompt("Enter times to duplicate:");

duplicateMessage(messageFromUser, times);
