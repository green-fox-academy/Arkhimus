'use strict';

let lineCount: number = 13;

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
let c: string = '*';
let d: string = '  ';


for (let i: number = 0; i < lineCount/2; i++) {
    for (let j: number = i; j < (lineCount / 2 - 1 ); j++) {
        a += ' ';
    }
    console.log( a + b );
    if (lineCount % 2 == 0 && i == lineCount/2 - 1) {
        console.log( a + b );
    }
    b += '**';
    a = ' ';
}

for (let v: number = 2; v < (lineCount/2 + 1); v++) {
    for (let g: number = v; g < lineCount/2; g++) {
        c += '**';
    }
    console.log( d + c );
    d += ' ';
    c = '*';
}