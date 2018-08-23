'use strict';

import { SumClass, inputCorrect, emptyList, oneElement, stringElement, nullElemenet } from "./sum";

declare function require(ptah: string): any;

let test = require('tape').test;

test('sum array elements', function (t) {
  let expected: number = 15;
  let actual: number = inputCorrect.sumNumbers();

  t.equal(expected, actual);
  t.end();
});

test('add all the numbers in the array', testing => {
  testing.equal(inputCorrect.sumNumbers(), 15, 'it should match.');
  testing.end();
});

test('add all the numbers in the array', testing => {
  testing.equal(emptyList.sumNumbers(), 0, 'it should match.');
  testing.end();
});

test('add all the numbers in the array', testing => {
  testing.equal(oneElement.sumNumbers(), 88, 'it should match.');
  testing.end();
});

test('add all the numbers in the array', testing => {
  testing.throw(stringElement.sumNumbers(), 'it is not a number', 'it should match.');
  testing.end();
});

test('add all the numbers in the array', testing => {
  testing.equal(nullElemenet.sumNumbers(), 0, 'it should match.');
  testing.end();
});
