'use strict';
let anagramBase: string = 'listen';
let anagramModded: string = 'silent';

export function anagramCompare(quote1: string, quote2: string): boolean {
  return (quote1.split('').sort().toString() === quote2.split('').sort().toString());
}

anagramCompare(anagramModded, anagramBase);