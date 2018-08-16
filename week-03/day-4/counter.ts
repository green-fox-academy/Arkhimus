'use strict'

// Write a recursive function that takes one parameter: n and counts down from n.

function countDown(num: number): any{
  if (num === 0){
    return 0;
  } else {
    console.log(num);
    num = countDown(num -1);
  }
}
countDown(10);