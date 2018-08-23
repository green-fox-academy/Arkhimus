'use strict';

import { getApples } from "./apples";

declare function require(path: string): any;

let test = require('tape');

test('is apple equal with apple' , function (t) {
  let actual = `apples`;
  let expected = getApples();

  t.equal(actual, expected);
  t.end();
});
