'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let side: number = 16;
let height: number = 24;
let cw: number = canvas.width; // /2=400

ctx.beginPath();
ctx.moveTo(cw / 2, height);
ctx.lineTo(cw / 2 - side, height * 2);  //  A
ctx.lineTo(cw / 2 + side, height * 2);  //  B
ctx.lineTo(cw / 2, height);             //  C
ctx.moveTo(cw / 2 - side, height * 2);
ctx.lineTo(cw / 2 - side * 2, height * 3);  //  A
ctx.lineTo(cw / 2, height * 3);  //  B
ctx.lineTo(cw / 2 - side, height * 2);           //  C

ctx.stroke();