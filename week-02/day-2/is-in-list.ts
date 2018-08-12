'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let mustCheck: number[] = [4, 8, 12, 16];
let equal: number[] = [];

function checkNums(element: number[]) {
    for (let i: number = 0; i < listOfNumbers.length; i++) {
        for (let j: number = 0; j < mustCheck.length; j++) {
            if (listOfNumbers[i] == mustCheck[j]) {
                equal.push(listOfNumbers[i]);
            }
        }
        
    }
    console.log(equal);
    if (equal == mustCheck){
        console.log(true);
    } else{
        console.log(false);
    }
    
}

console.log(checkNums(listOfNumbers));


export = checkNums;