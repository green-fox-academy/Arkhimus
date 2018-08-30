'use strict';

let one: string = '1';
let thousand: string = '000';

let numberOne: number = 1;
let numberThousand: number = 1000;

function numbersToString(inputInteger: number): any {
  if (inputInteger.toString().split('').length < 3){
    return inputInteger.toString().join()
  }
}

numbersToString(12134);
