export { }
'use strict';

let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away
console.log(example);

let replacedExample: string = example.replace('dishwasher', 'galaxy');
console.log(replacedExample);

/*
let replace = /dishwasher/;
let newExample = example.replace(replace, 'galaxy');
console.log(newExample);
*/