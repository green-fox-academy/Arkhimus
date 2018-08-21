//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

let makeItUnique: number[] = [1, 11, 34, 11, 52, 61, 1, 34];
let uniqueArray: number[] = [];

for (let i: number = 0; i < makeItUnique.length; i++) {
  if (makeItUnique[i] === 1) {
    console.log(makeItUnique.indexOf(1));
  }
}

//  Example
// console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`

