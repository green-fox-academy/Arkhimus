'use strict';

// //  Create a function that takes two strings as a parameter
// //  Returns the starting index where the second one is starting in the first one
// //  Returns `-1` if the second string is not in the first one
// function substr(str: string, keyword: string) : number {
//   return -1;
// }

// //  Example
// console.log(substr("this is what I'm searching in", "searching"));
// // should print: `17`
// console.log(substr("this is what I'm searching in", "not"));
// // should print: `-1`

let sentence: string = 'Be yourself; everyone else is already taken.';
let sentence2: string = 'this is what I\'m searching in';
let search: string = 'yourself';

function subStr(examine: string, keyword: string): any {
  console.log(examine.indexOf(keyword));
}
subStr(sentence2, search);