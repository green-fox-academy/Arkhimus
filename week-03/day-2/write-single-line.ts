declare function require(path: string): any;

// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

const fs = require('fs');
const encode = 'utf-8';

function writeName(file: string, data: string): void {
  let tempFile: string = null;
  let newData: string = 'Adam Reznek\n';
  try{
    tempFile = fs.readFileSync(file, encode);
    fs.writeFileSync(file, newData + tempFile);
  } catch (error){
    throw Error('Unable to write file: my-file.txt');
  }
}
writeName('my-file.txt', '');