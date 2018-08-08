'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

let startX: number = Math.floor((Math.random() * 300) + 1);
let startY: number = Math.floor((Math.random() * 200) + 1);
let lineCount: number = 3;

function toCenter(x: number){
for (let i: number = 0; i < lineCount; i++) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(300, 200);
    ctx.stroke();
    startX += Math.floor((Math.random() * 100) + 1);
    startY += Math.floor((Math.random() * 75) + 1);
}
}
toCenter(lineCount);