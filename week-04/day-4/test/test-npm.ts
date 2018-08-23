import { fibonacci } from "./test-function";

'use strict';

declare function require(path: string): any;

let test = require('tape').test;

test('see asdsadsadasd', function (t) {
  let actual = fibonacci(8);
  let expected = 21;
  t.equal(actual, expected);
  t.end();
});
