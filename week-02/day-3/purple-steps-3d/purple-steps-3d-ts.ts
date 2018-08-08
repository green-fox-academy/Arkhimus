'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]
let x: number = 0;
let y: number = 0;
let size: number = 11;

for (let i: number = 0; i < 6; i++) {
    ctx.fillStyle = 'rgb(176, 78, 240)';
    ctx.fillRect(x, y, size, size);
    ctx.strokeRect(x, y, size, size);
    x = x + size;
    y = y + size;
    size = size + 10;
}