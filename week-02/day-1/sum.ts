// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

export{}

let mustSum: number = 4;

function sum (num: number) {
    let j: number = 0;
    for (let i:number = 0; i <= num; i++) {
        j = j += i;
    };
    return j;
}

console.log(sum(mustSum));