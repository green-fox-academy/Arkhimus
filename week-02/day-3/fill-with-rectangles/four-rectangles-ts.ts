'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

let startx: number = Math.fround((Math.random() * 550) + 1);
let starty: number = Math.fround((Math.random() * 350) + 1);
let rct: number = Math.fround((Math.random() * 50) + 1);
let rectCount = 20;

function drawRect(counter: number) {
    for (let i: number = 0; i < rectCount; i++) {
        ctx.fillStyle = 'rgb(' + Math.fround((Math.random() * 255) + 1) + ', ' + Math.fround((Math.random() * 255) + 1) + ', ' + Math.fround((Math.random() * 255) + 1) + ') ';
        ctx.fillRect(startx, starty, rct, rct);
        startx = Math.fround((Math.random() * 550) + 1);
        starty = Math.fround((Math.random() * 350) + 1);
        rct = Math.fround((Math.random() * 50) + 1);
    }
}

drawRect(rectCount);