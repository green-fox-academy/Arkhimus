'use strict';

let textToReverse = "This is my example sentence. Just for fun.";
let textArray = [];
let reversedText = [];

// function reverser(text) {
//   textArray = text.split(' ');
//   for (let i = 0; i <= textArray.length; i++) {
//     if (i % 2 === 0 && textArray[i + 1] !== undefined) {
//       reversedText.push(textArray[i + 1]);
//     } else if (i % 2 === 1 && textArray[i - 1] !== undefined) {
//       reversedText.push(textArray[i - 1]);
//     }
//   }
//   console.log(reversedText);
// }

// reverser(textToReverse);

console.log(textToReverse.split('. '));