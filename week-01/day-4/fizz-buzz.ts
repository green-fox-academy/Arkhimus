'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

let k: number = 1;

for (let i: number = 1; i <= 100; i++ ) {
    let j: number = i * k;
    if ( j % 3 === 0 ) {
        console.log("Fizz");
    } else if ( j % 5 === 0 ) {
        console.log("Buzz");
    } else {
        console.log(j);
    }
}