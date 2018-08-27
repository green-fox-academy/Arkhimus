'use strict';

import { test } from 'tape';
import { anagramCompare } from './anagram';

test('is an anagram bro/brotherina?', test => {
  test.equal(anagramCompare('listen', 'silent'), true);
  test.end();
});

test('is an anagram with lower/upper case bro/brotherina?', test => {
  test.equal(anagramCompare('Listen', 'Silent'), true);
  test.end();
});

test('is the input null bro/brotherina?', test => {
  test.equal(anagramCompare('Listen', null), false);
  test.end();
});