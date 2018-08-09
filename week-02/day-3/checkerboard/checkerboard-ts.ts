'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

let x: number = 0;
let y: number = 0;
let size: number = 20; //kb. 30-as loop kell

for (let i: number = 0; i < size; i++) {
    ctx.fillRect(x, y, size, size);
    for (let j: number = 0; j < 30; j++) {
        ctx.fillRect(x, y, size, size);
        x = x + size * 2;
    }
    if (i % 2 == 0) {
        x = size;
    } else {
        x = 0;
    }
    y = y + size;
}