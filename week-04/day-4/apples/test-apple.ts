'use strict';

import { appleObject } from "./apples";

declare function require(path: string): any;

let test = require('tape');

test('is apple equal with apple' , function (t) {
  let actual = appleObject.getApples(); 
  let expected = `apples`;

  t.equal(actual, expected);
  t.end();
});
