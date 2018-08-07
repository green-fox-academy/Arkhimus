export {}

'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"
let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'

let tempQuote: string [] = quote.split(' ');
let arrayQuote: string [] = tempQuote.splice((quote.indexOf('It')), 0, 'always takes longer than');
quote = arrayQuote.join(' ');

console.log(quote);