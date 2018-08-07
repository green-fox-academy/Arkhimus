export { }
'use strict';

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

/*
console.log(reverse(reversed));

export = reverse;
*/

function reverseString(str: string) {

    let split: string []= reversed.split('');
    let reverseing: string [] = split.reverse();
    let rev: string = reverseing.join('');
    return rev;
}
console.log(reverseString(reversed));