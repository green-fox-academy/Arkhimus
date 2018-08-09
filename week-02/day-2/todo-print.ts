'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention
// Expected outpt:
// My todo:
//  - Buy milk
//  - Download games
//      - Diablo
let todoText: string = ' - Buy milk\n';

let modTodo: string [] = todoText.split('\n');
modTodo.unshift('My todo:\n');
modTodo.push(' - Download games\n');
modTodo.push('      - Diablo\n');
todoText = modTodo.join('\n');

console.log(todoText);