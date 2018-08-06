// -  Create a function called `factorio`
//    that returns it's input's factorial

export{}

let input: number = 5;

function factorio (num: number) {
    let j:number = 1;
    for (let i: number = 2; i<= num; i++) {
        j *= i;
    };
    return j;
}

console.log(factorio(input));