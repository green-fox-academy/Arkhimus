export{}

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

/*
let parameters: number [] = [];
parameters = [3,5,7,745];

function printParams (num: number []) {
    num = parameters;
    return num;
}
console.log(printParams(parameters));
*/

let parameters: number [] = [];
parameters = [4,5645,453,13634];

function printParams (num: number []) {
    let j: number = 0;
    for (let i: number = 0; i < num [j]; i++) {
        j = i;
        console.log(num[i]);
    };
}
console.log(printParams(parameters));