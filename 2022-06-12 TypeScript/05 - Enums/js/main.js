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
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Sunday"] = 0] = "Sunday";
    DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
    DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
    DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
    DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
    DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
    DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
})(DayOfWeek || (DayOfWeek = {}));
function showTaskByDay(day) {
    if (day === DayOfWeek.Friday) {
        document.write('Go Shopping!</br>');
    }
    else {
        document.write('No Task for Today... </br>');
    }
}
showTaskByDay(DayOfWeek.Friday);
// showTaskByDay('Friday'); // Error
showTaskByDay(DayOfWeek.Monday);
