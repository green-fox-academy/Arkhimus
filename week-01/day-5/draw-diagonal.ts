'use strict';

let lineCount: number = 15;

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

let a: string = '%';
let b: string = ' ';
let line: string = '';

for (let i: number = 0; i <= lineCount - 1; i++) {
    for (let j: number = 0; j <= lineCount - 1; j++) {
        if (i == 0 || i == lineCount - 1 || j == 0 || j == lineCount - 1 || i == j || j==lineCount - i - 1) {
            line = line + a;
        } else {
            line = line + b;
        }
    }
    console.log(line);
    line = '';
}