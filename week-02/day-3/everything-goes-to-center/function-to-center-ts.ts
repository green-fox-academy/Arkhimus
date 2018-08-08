'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

let x: number = 0;
let y: number = 0;
let xx: number = 600;
let yy: number = 400;
let tempX: number = 0;
let tempY: number = 0;
let tempXx: number = 0;
let tempYy: number = 0;

function darwToCenter(xToCenter: number, yToCenter: number) {
    if (x === 0 && y === 0) {
        for (let i: number = 0; i <= 600; i += 20) {
            ctx.beginPath();
            ctx.moveTo(tempX, y);
            ctx.lineTo(300, 200);
            ctx.stroke();
            tempX = x + i;
        }
    } if (xx === 600 && y === 0) {
        for (let j: number = 0; j <= 400; j += 20) {
            ctx.beginPath();
            ctx.moveTo(xx, tempY);
            ctx.lineTo(300, 200);
            ctx.stroke();
            tempY = y + j;
        }
    } if (xx === 600 && yy === 400) {
        for (let k: number = 600; k >= 0; k -= 20) {
            ctx.beginPath();
            ctx.moveTo(xx, tempYy);
            ctx.lineTo(300, 200);
            ctx.stroke();
            tempYy = y + k;
        }
    } if (xx === 0 && y === 400) {
        for (let l: number = 400; l > 0; l -= 20) {
            ctx.beginPath();
            ctx.moveTo(tempXx, yy);
            ctx.lineTo(300, 200);
            ctx.stroke();
            tempXx = y + l;
        }
    }
}
darwToCenter(x, y);
