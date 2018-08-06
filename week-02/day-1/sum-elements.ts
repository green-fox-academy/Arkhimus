export{}

// -  Create a variable named `r` with the following content: `[54, 23, 66, 12]`
// -  Print the sum of the second and the third element

let r: number [] = [54,23,66,12];
let rElement: number = 0;
let sum: number = 0;
for (let i: number = 0; i < r.length; i++) {
    rElement+= r[i];
}
console.log(rElement);