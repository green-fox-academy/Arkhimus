'use strict';

declare function require(path: string): any;
const fs = require('fs');

const encodeChar: string = 'UTF-8';

function fileRead(fileName: string): string {
  try {
    let fileContent: string = fs.readFileSync(fileName, encodeChar);
    return fileContent;
  } catch {
    console.log('Sorry Dave I can\'t let you do that...');
    return null;
  }
}

let fileContent = fileRead('number.txt');
console.log(fileContent);
let numbers: number = 0;
let tempArray: string[] = [];

let partToErease = /[^0-9 ]/gi;
let contentWithoutBreaksArray: string [] = fileContent.replace(partToErease, ' ').split(' ');
let numbersInArray: number [] = [];

// for (let i in contentWithoutBreaksArray) {
//   numbersInArray.push(Number(fileContent.replace(partToErease, ' ').split(' ')[i]));
// }

for (let i in contentWithoutBreaksArray){
  if (contentWithoutBreaksArray[i] !== ''){
    numbersInArray.push(Number(contentWithoutBreaksArray[i]));
  }
}

console.log(contentWithoutBreaksArray);
console.log(numbersInArray);
