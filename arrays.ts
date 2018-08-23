'use strict';

let element: any[] = [
  { name: 'Babi neni' },
  { name: 'Ottokar' },
  { name: 'A macska' },
  { name: 'Evelinke' }];

let elementsLetterA: any[] = element.filter((value, index, array) => {
  return value.name.indexOf('a') !== -1;
});

console.log(elementsLetterA);

const withLetter = (filterBy: string): any[] => {
  return elementsLetterA.filter((value, index, array) => {
    return value.name.indexOf(filterBy) >= 0;
  })
}

console.log(withLetter('Ev')); //   ??????????????

const log = (param: any[]) => {
  param.forEach((value, item, array) => {
    console.log(value);
  })
}

log(withLetter('Ev'));
