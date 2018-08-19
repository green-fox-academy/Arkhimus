'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let blackSquare: string = '%';
let whiteSquare: string = ' ';
let blank: string = '';
let lineCount: number = 8;

for (let i: number = 0; i < lineCount; i++) {
  for (let j: number = 0; j < lineCount / 2; j++) {
    if (i % 2 != 0) {
      blank = blank + whiteSquare + blackSquare;
    } else {
      blank = blank + blackSquare + whiteSquare;
    }
  }
  console.log(blank);
  blank = '';
}
