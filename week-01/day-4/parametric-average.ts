'use strict';

// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4

let a: number = 6;
let b: number = 3;
let c: number = 8;

function sumAndAverage(x: number, y: number, z: number) {
  console.log('The sum of the numbers: ' + (x + y + z));
  console.log('The average of the numbers: ' + (x + y + z) / 3);
}
sumAndAverage(a,b,c);