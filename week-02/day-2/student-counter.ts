export { }

'use strict';

const students: any[] = [
    { name: 'Theodor', age: 3, candies: 2 },
    { name: 'Paul', age: 9.5, candies: 2 },
    { name: 'Mark', age: 12, candies: 5 },
    { name: 'Peter', age: 7, candies: 3 },
    { name: 'Olaf', age: 12, candies: 7 },
    { name: 'George', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students
// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function candieSum(candie: any []) {
    let candieNumber: number = 0;
    candie.forEach(elem => {
        candieNumber += elem.candies;
    });
    console.log(candieNumber);
};
candieSum(students);
/*
function sumCandies (list: any[]){
    let temp: number = 0;
    list.forEach ((elem) => {
        temp += elem['candies'];
    });
    return temp;
}
console.log(sumCandies(students));
*/

/* WHHHHHHYYY is the result undefined????!!!!4444!!4!!!44(négy)!!!
function ageSum(listed: any[]) {
    let ageTemp: number = 0;
    listed.forEach((element) => {
        if (element['candies'] < 5) {
            ageTemp += element['age'];
        }
        return ageTemp;
    });
}
console.log(ageSum(students));
*/

function ageSum(candie: any []) {
    let ageTemp: number = 0;
    candie.forEach(elem => {
        if (elem.candies < 5) {
            ageTemp += elem.age;
        }
    });
    console.log(ageTemp);
};
ageSum(students);