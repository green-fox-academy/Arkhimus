// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

'use strict'

function bunnyEars(bunnies: number): number {
  if (bunnies === 1) {
    return 2;
  } else {
    return 2 + bunnyEars(bunnies - 1);
  }
}
console.log(bunnyEars(10));