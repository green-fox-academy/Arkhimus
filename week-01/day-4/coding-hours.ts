'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

console.log("Coding hours: " + (17 * 5 * 6)); //510
let a = 17;
let b = 52;
let c = a * b;
console.log("Percentage of the coding hours: " + ( 510 / c * 100 ) );