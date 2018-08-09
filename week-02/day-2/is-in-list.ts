'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
let mustCheck: number[] = [4, 8, 12, 16];

function checkNums(element) {
    for (let i: number = 0; i < listOfNumbers.length; i++) {
        let x: number = 0;
        let y: boolean;
        for (let j: number = 0; j < mustCheck.length; j++) {
            y = mustCheck[j] == listOfNumbers[i];
            x = j;
            if (x = mustCheck.length) {
                x = 0;
            }
        }
        return listOfNumbers[i] == mustCheck[x];
    }
}

console.log(checkNums(listOfNumbers));

export = checkNums;