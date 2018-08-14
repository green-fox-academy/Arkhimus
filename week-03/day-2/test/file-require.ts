declare function require(path: string): any;
'use strict'
export { }

const fs = require('fs');
const charEncode = 'utf-8';


function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, charEncode);
  } catch (e) {
    console.log(e.message);
    return null; // lehet vele vizsgálni, hogy megkapta-e a file tartalmát
  }
}

// console.log(readFromFile('hell.txt'));

function writeToFile(fileName: string, data: string): void {
  fs.writeFileSync(fileName, data);
}

function countChar(char: string): number {
  let result: number = 0;
  const fileContent = readFromFile('hello.txt');
  // if (file content == null) ==>> ezzel lehet megnézni, hogy jólolvasta-e be a filet ( lehet file name hiba, vagy akármi más ) 
  fileContent.split('\r\n').forEach(element => {    // \r return \n new line
    element.split('').forEach(e => {
      if (e === char) {
        result += 1;
      }
    });
  });
  return result;
}

console.log(countChar('t'));

// writeToFile('yello.txt', 'asdasdasdsadasdasdasdasdasdsadasdasdasdasdasdasdasdsdsdssdadsadadadsadsdsdasafsadsadasfsadasfsadDSAFAFSAasf');