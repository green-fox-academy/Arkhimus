'use strict'

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

let countTo: number = 10;

function numberAdder (n: number){
  if (n > countTo){
    return countTo;
  } else {
    console.log(n);
    n = numberAdder(n+1);
  }
}
numberAdder(1);