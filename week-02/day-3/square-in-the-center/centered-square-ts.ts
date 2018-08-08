'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw a green 10x10 square to the center of the canvas.

let stX: number = 295;
let stY: number = 195;

ctx.beginPath();
ctx.moveTo(stX, stY);
ctx.lineTo(stX, stY + 10);
ctx.lineTo(stX + 10, stY + 10);
ctx.lineTo(stX+ 10, stY);
ctx.lineTo(stX, stY);
ctx.stroke();
