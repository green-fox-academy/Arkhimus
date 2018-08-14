// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

declare function require(path: string): any;

const fs = require('fs');
const encode = 'utf-8';



function lineCount(file: string): number {
  try {
    let decode: string = fs.readFileSync(file, encode);
    let splitted: string []= decode.split('\n');
    return splitted.length;
  } catch {
    console.log(0);
  }
} 
    
console.log(lineCount('my-file.txt'));

/* DOESN'T WORK THIS WAY BUT WHYYYYYY???!!4!négy!
function lineCount(file: string): number {
  try {
    let decode: string = fs.readFileSync(file, encode);
    let splitted: string []= decode.split('\n');
    console.log(splitted.length);
  } catch {
    console.log(0);
  }
} 
    
lineCount('my-file.txt');
*/