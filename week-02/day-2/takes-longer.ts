export {}

'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"
let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'




let tempQuote: string [] = quote.split(' ');
let insertIndex: number = tempQuote.indexOf('It');
tempQuote.splice(insertIndex + 1, 0, 'always takes longer than');
quote = tempQuote.join(' ');
console.log(quote);