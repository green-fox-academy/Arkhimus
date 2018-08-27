'use strict';
let anagramBase: string = 'Listen';
let anagramModded: string = null;

export function anagramCompare(quote1: string, quote2: string): boolean {
  if (quote1 !== null && quote2 !== null) {
    return (quote1.toLowerCase().split('').sort().toString() === quote2.toLocaleLowerCase().split('').sort().toString());
  }
  throw new TypeError('not a string');
}
