'use strict';

export class SumClass {
  protected sumElements: number[];

  constructor(sumElements: number[]) {
    this.sumElements = sumElements;
  }

  sumNumbers(): number {
    let sumOf: number = 0;
    for (let i: number = 0; i < this.sumElements.length; i++) {
      sumOf += this.sumElements[i];
    }
    return sumOf;
  }
}

export let inputCorrect = new SumClass([1, 2, 3, 4, 5]);
export let emptyList = new SumClass([]);
export let oneElement = new SumClass([88]);
export let stringElement = new SumClass(['hi', 'bro']);
export let nullElemenet = new SumClass(null);
