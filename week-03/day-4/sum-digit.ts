// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

'use strict'

function sumDigits(sumThis: number): any {
  if (sumThis < 0) {
    throw new Error('Gimme positive numba bro pls');
  }
  if (sumThis < 10) {
    return sumThis;
  } else {
    return (sumThis % 10) + sumDigits(Math.floor(sumThis / 10));
  }
}
console.log(sumDigits(2002));

