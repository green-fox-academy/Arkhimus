'use strict';

let textToReverse = "This is my example sentence.";
let textArray = [];
let reversedText = [];

function reverser(text) {
  textArray = text.split(' ');
  for (let i = 0; i <= textArray.length; i++) {
    if (i % 2 === 0 && textArray[i + 1] !== undefined || i + 1 === 1) {
      reversedText.push(textArray[i + 1]);
    } else if (i % 2 === 1 && textArray[i - 1] !== undefined) {
      reversedText.push(textArray[i - 1]);
    }
  }
  for (let j = 0; j < textArray.length; j++) {
  }
  console.log(reversedText);
}

reverser(textToReverse);
