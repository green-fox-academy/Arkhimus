export { }

'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets(list: any[]) {
    shopItems.forEach(element => {
        if (element === 2) {
            list.splice(element - 1, 1, 'Croissant');
        } else if (element === false) {
            list.splice(element -1, 1, 'Ice cream');
        } else {
        }
    });
    return console.log(list);
}
sweets(shopItems);

// export = sweets;