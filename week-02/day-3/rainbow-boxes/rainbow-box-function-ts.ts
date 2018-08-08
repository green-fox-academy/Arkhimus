'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let color: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let size: number = 600;

//function rainbowSquare(rainbowColor: string[], rainbowSize: number){


function rainbowSquare(defSize: number, defColor: string[]) {
    let index: number = 0;
    for (let i: number = size; i > 0; i - 5) {
        ctx.fillStyle = color[index];
        ctx.fillRect(300 - (i/2), 200 - (i/2), i, i);
        if(index == 6) {
            index = 0;
        } else {
            index++;
        }
    }
}
rainbowSquare(size,color);
