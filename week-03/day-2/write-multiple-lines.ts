// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.

declare function require(path: string): any;
'use strict'

const fs = require('fs');
const charEncode: string = 'utf-8';

function pathWriter(path: string, word: string, lines: number) {
  try {
    for (let i: number = 0; i < lines; i++) {
      fs.writeFileSync(path + word + '.txt', word);
    }
  } catch (err) {
    return null;
  }
}

pathWriter('./write-multiple/', 'idk', 5);