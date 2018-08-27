'use strict';

import { test } from 'tape';

test('is an anagram bro/brotherina?', test => {
  let anagramBase: string = 'listen';
  let anagramModded: string = 'silent';

  function anagramCompare(quote1: string, quote2: string): boolean {
    return (quote1 === quote2);
  }

  test.equal(anagramCompare(anagramBase, anagramModded), true);
  test.end();
});