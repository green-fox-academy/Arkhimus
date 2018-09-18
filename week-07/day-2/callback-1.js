'use strict';

const mapWith = (array, callback) => {
  let output = [];
  array.map((element) => {
    output.push(callback(element));
  });

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.



  return output;
}

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

const removeSecondLetter = (string) => {
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string[i].length; j++) {
      if (j % 2 === 0) {
        string[i][j] = '';
      }
    }
  }
  return string;
}

// Create a callback function which removes every second character from a string

let words = ['map', 'reduce', 'filter'];

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
