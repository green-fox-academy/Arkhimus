'use strict';

declare function require(path: string): any;
const fs = require('fs');

const encodeChar: string = 'UTF-8';

function fileRead(fileName: string): string {
  try {
    let fileContent: string = fs.readFileSync(fileName, encodeChar);
    return fileContent;
  } catch {
    console.log('Sorry Dave I can\'t let you do that...');
    return null;
  }
}