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

let a: string = ' ';
let b: string = '*';

for (let i: number = 0; i < lineCount; i++) {
    for (let j: number = i; j < (lineCount - 1); j++) {
        a += ' ';
    }
    console.log( a + b );
    b += '**';
    a = ' ';
}