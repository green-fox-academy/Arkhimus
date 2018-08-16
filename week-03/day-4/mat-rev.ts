'use strict'

// function hello(n){
//   console.log('hello' + n);
//   hello(n + 1);
// }

// hello(0);

function addNumber(n: number): number{
  if (n<1){
    throw new Error('DONT USE NEGATIVE NUMBERS BRAW');
  }
  if (n == 1){
    return 1;
  } else {
    return n + addNumber(n - 1);
  }
}

console.log(addNumber(3545));