function printArray(arr, oneLine) {
    const separator = oneLine ? ' ' : '</br>';
    for (const item of arr) {
        document.write(item + separator);
    }
}
const arr1 = [10, 20, 30];
printArray(arr1, true);
document.write('</br>');
printArray(arr1, false);
