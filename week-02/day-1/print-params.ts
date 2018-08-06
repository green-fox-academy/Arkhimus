export{}

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

let parameters: number [] = [];
parameters = [4,5645,453,13634];

function printParams (num: number []) {
    for (let i: number = 0; i < num.length ; i++) {
        console.log(num[i]);
    };
}
printParams(parameters);