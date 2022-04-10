const str =
  "Hello, my name Inigo Montoya, you killed my father. Prepare to die";
const arr = str.split(" ");
console.log(arr); // ["Hello,", "my", "name".....];
for (const item of arr) {
  document.write(`${item}<br/>`);
}

document.write("<hr/>");

const str2 = str.indexOf("Montoya");
console.log(str2);

const myStr = "fullName=kajsdlkasldads";

const str3 = myStr.substring(myStr.indexOf("=") + 1, myStr.length); // start, end

// alert(str3);

const myStr2 = "fullName=blabalabalbalbalb; expires=20";

const str4 = myStr2.substring(myStr2.indexOf("=") + 1, myStr2.indexOf(";"));
alert(str4);
