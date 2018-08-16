// Given a non-negative int n, return the sum of its digits recursively (no loops). 
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while 
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).

'use strict'

function sumDigits(sumDis: number): any {
  if (sumDis < 0) {
    throw new Error('Gimme positive numba braw pls');
  }
  if (sumDis < 10) {
    return sumDis;
  } else {
    return (sumDis%10) + sumDigits(Math.floor(sumDis/10));
  }
}
console.log(sumDigits(3262568));


