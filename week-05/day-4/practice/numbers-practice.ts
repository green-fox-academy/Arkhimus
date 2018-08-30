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
// console.log(fileContent);
let numbers: number = 0;
let tempArray: string[] = [];

let partToErease = /[^0-9 ]/gi;
let contentWithoutBreaksArray: string[] = fileContent.replace(partToErease, ' ').split(' ');
let numbersInArray: number[] = [];
let multiArray: number[][] = [];

// single line array
for (let i in contentWithoutBreaksArray) {
  if (contentWithoutBreaksArray[i] !== '') {
    numbersInArray.push(Number(contentWithoutBreaksArray[i]));
  }
}

// multi line array
function convertStringToMatrix(matrixString) {
  let matrixNumber = [];
  let matrixRows = matrixString.split('\r\n');
  matrixRows.forEach(row =>
    matrixNumber.push(row.split(' '))
  );
  return matrixNumber;
}

// console.log(contentWithoutBreaksArray);
// console.log(numbersInArray);
// console.log(multiArray);
console.log(convertStringToMatrix(fileContent));
