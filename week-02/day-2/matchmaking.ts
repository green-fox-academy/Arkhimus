export{}

'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

/* does something but full of sh*t
function matching (first: any [], second: any [] ) {
    let tempMatch: any [] = [];
    for (let i: number = 0; i <= first.length; i++) {
        for (let j: number = 0; j<= second.length; j++){
            if (i%2==0){
                tempMatch[i]= first[j+1];
            } else {
                tempMatch [j] = second[i];
            }
            console.log(tempMatch);
        }
    }
    return console.log(tempMatch);
}
matching(girls,boys);

/*
console.log(makingMatches(girls, boys));

export = makingMatches;
*/