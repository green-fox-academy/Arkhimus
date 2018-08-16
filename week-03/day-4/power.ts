'use strict'

function powerN(base: number, exponent: number): number {
  if (exponent == 1) {
    return base;
  } else {
    return base * powerN(base, exponent - 1);
  }
}
console.log(powerN(522, 74));