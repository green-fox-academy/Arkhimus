'use strict'

// Write a recursive function that takes one parameter: n and counts down from n.

function countDown(n: number): any{
  if (n === 0){
    return 0;
  } else {
    console.log(n);
    n = countDown(n -1);
  }
}
countDown(10);