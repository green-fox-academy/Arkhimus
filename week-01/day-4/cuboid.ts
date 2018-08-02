'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let a: number = 4;
let b: number = 6;
let c: number = 5;

console.log("Surface Area: " + (( a * b + a *c + b * c ) * 2));
console.log("Volume: " + ( a * b * c ));