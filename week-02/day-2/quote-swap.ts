'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code
// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().
let words: string[] = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];


function quoteSwap(element: string[]) {
    let swap1: number = words.indexOf('do');
    let swap2: number = words.indexOf('cannot');
    let temp: string = words[swap1];
    words.splice(swap1, 1, words[swap2]);
    words.splice(swap2, 1, temp);
    let finalQuote: string = words.join(' ');
    return finalQuote;
}
console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."
export = quoteSwap;