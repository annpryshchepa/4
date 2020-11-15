// Write a function nextInLine which takes an array (arr) and a number (item) as arguments. 
//Add the number to the end of the array, then remove the first element of array. 
//The `nextInLine` function should then return the element that was removed.

function nextInLine(arrNumber, item) {
    let firstNumber = arrNumber[0];
    arrNumber.shift();
    console.log(firstNumber);           // return arr.shift();
    arrNumber.push(item);
}
console.log(nextInLine(2, 1))