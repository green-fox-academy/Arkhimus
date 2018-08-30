'use strict';

export {};
// declare function require(path: string): any;

const fs = require('fs');

function readFile(fileName): string {
  try {
    let fileContent = fs.readFileSync(`${fileName}.csv`, 'utf-8');
    return fileContent;
  } catch {
    console.log('Cannot find something bro');
    return null;
  }
}
