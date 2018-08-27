'use strict';

import { test } from 'tape';
import { anagramCompare } from './anagram';

test('is an anagram bro/brotherina?', test => {
  test.equal(anagramCompare(anagramBase, anagramModded), true);
  test.end();
});