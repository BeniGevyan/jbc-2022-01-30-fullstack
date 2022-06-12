// function showTaskByDay(day: number): void { // ייצוג יום ע״י מספר
//   if (day === 6) { // פחות נוח להבנה משמעות של כל מספר
//     document.write('Go Shopping!</br>');
//   } else {
//     document.write('No Task for Today... </br>');
//   }
// }

// showTaskByDay(6);
// showTaskByDay(17);

// function showTaskByDay(day: string): void {
//   // ייצוג יום ע״י מחרוזת
//   if (day === 'Friday') {
//     document.write('Go Shopping!</br>');
//   } else {
//     document.write('No Task for Today... </br>');
//   }
// }

// showTaskByDay('Friday');
// showTaskByDay('Chinees Single Day');

enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function showTaskByDay(day: DayOfWeek): void {
  if (day === DayOfWeek.Friday) {
    document.write('Go Shopping!</br>');
  } else {
    document.write('No Task for Today... </br>');
  }
}

showTaskByDay(DayOfWeek.Friday);
// showTaskByDay('Friday'); // Error
showTaskByDay(DayOfWeek.Monday);
