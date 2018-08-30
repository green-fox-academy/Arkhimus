'use strict';

export { }

declare function require(path: string): any;
const fs = require('fs');

const fileName: string = 'poem.txt';
const encodeChar: string = 'UTF-8';

let content = fs.readFileSync(fileName, encodeChar);
let poemArray: string[] = content.split(' ');
let wordLength: number[] = [];
let wordLenhtAverage: number = 0;

let partToErease = /[^a-zA-Z ]/gi;
let contentWithoutBreaks: string = content.replace(partToErease, ' ');
let contentWithoutBreaksArray: string[] = content.replace(partToErease, '').split(' ');

function countWordLength(lines: string[]): number {
  for (let index in lines) {
    wordLength.push(lines[index].length);
  }
  for (let index in lines) {
    wordLenhtAverage += lines[index].length;
  }
  return wordLenhtAverage / wordLength.length;
}

console.log(countWordLength(contentWithoutBreaksArray));
console.log(contentWithoutBreaks);
