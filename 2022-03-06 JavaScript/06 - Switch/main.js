var num = +prompt("Enter number between 1 and 5:");

// לא מובן כל כך
// if (num == 1) {
//   document.write("One");
// } else {
//   if (num == 2) {
//     document.write("Two");
//   } else {
//     if (num == 3) {
//       document.write("Three");
//     } else {
//       if (num == 4) {
//         document.write("Four");
//       } else {
//         if (num == 5) {
//           document.write("Five");
//         } else {
//           document.write("Error: enter 1 to 5!");
//         }
//       }
//     }
//   }
// }

// קצת יותר מובן
// if (num == 1) {
//   document.write("One");
// } else if (num == 2) {
//   document.write("Two");
// } else if (num == 3) {
//   document.write("Three");
// } else if (num == 4) {
//   document.write("Four");
// } else if (num == 5) {
//   document.write("Five");
// } else {
//   document.write("Error: enter 1 to 5!");
// }

switch (num) {
  case 1:
    document.write("One");
    break;
  case 2:
    document.write("Two");
    break;
  case 3:
    document.write("Three");
    break;
  case 4:
    document.write("Four");
    break;
  case 5:
    document.write("Five");
    break;
  default:
    document.write("Error: enter 1 to 5!");
}
