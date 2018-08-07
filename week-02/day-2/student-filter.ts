export { }

'use strict';

const students: any[] = [
    { name: 'Mark', age: 9.5, candies: 2 },
    { name: 'Paul', age: 12, candies: 5 },
    { name: 'Clark', age: 7, candies: 3 },
    { name: 'Pierce', age: 12, candies: 7 },
    { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function moreCandies(list: any[]) {
    list.forEach(element => {
        if (element.candies > 4) {
            console.log(element.name);
        }
    });
}
moreCandies(students);

function avgCandies(list: any[]) {
    let avgCandy: number = 0; 
    list.forEach(element => {
        avgCandy += element.candies;
    });
    return avgCandy / list.length;
}
console.log(avgCandies(students));