export { }

'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"


const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
/*
function containsSeven(list: any[]) {
    list.map(element => {
        let msg: string;
        if (element === 7) {
            msg = ('Hoorray');
        } else {
            msg = ('Noooooo');
        }
        console.log(msg);
    });
}

containsSeven(numbers);

*/
// a some a végén ad true vagy false-ot és annak megfelelően kell console.logolni

function containsSeven(list: any []) {
    list.some()
}

//console.log(containsSeven(numbers));

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

//export = containsSeven;