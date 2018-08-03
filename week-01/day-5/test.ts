'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is


//UPSIDE DOWN TRIANGLE


let c: string = '*';
let d: string = '';

for (let v: number = 0; v < lineCount; v++) {
    for (let g: number = v; g < (lineCount - 1); g++) {
        c += '**';
    }
    console.log( d + c );
    d += ' ';
    c = '*';
}

