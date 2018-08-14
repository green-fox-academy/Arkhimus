// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

declare function require(path: string): any;
'use strict'

const fs = require('fs');
const encodeChar: string = 'utf-8';

function copyFile(from: string, to: string): boolean {
  try {
    let mustCopy: string = fs.readFileSync(from, encodeChar);
    fs.writeFileSync(to, mustCopy);
  } catch (err) {
    return false;
  }
}

console.log(copyFile('copy-fr3om.txt', 'copy-to.txt'));