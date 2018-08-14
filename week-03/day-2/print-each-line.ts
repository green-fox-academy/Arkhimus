// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

declare function require(path: string): any;

const fs = require('fs');
const encode = 'utf-8';

function readAndPrint(filename: string): string {
  try {
    return fs.readFileSync(filename, encode);
  } catch {
    throw new Error('Unable to read file: my-file.txt');
  }
}
console.log(readAndPrint('my-file.txt'));