'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

let x: number = 0;
let y: number = 0;

for (let i: number = 0; i < 19; i++) {
    ctx.fillStyle = 'rgb(176, 78, 240)';
    ctx.fillRect(x, y, 11, 11);
    ctx.strokeRect(x, y, 11, 11);
    x = x + 11;
    y = y + 11;
}