// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

declare function require(path: string): any;
'use strict'

const fs = require('fs');
const encodeChar: string = 'utf-8';
let ipAdresses: string[] = [];

function ipLocation(checkLog: string): any {
  fs.readFileSync(checkLog, encodeChar);
  let checkIp: string[] = checkLog.split(' ');
  return checkIp;
}
console.log(ipLocation('log.txt'));