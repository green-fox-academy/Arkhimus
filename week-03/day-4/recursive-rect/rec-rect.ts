'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const w: number = canvas.width;
const h: number = canvas.height;

let x: number = canvas.width;
let y: number = canvas.height;
let side: number = canvas.width / 3;
let sequence: number = 3;

function drawDatShit(xCoord: number, yCoord: number, size: number, n: number) {
  if (n > 1) {
    ctx.strokeRect(xCoord / 3, yCoord - (size * 3), size, size);
    ctx.strokeRect(xCoord - (size * 3), yCoord / 3, size, size);
    ctx.strokeRect(xCoord - size, yCoord - (size * 2), size, size);
    ctx.strokeRect(xCoord - (size * 2), yCoord - size, size, size);

    size = size / 3;
    drawDatShit(x, y, size, n - 1);
    drawDatShit(x, y, size, n - 1);
    drawDatShit(x, y, size, n - 1);
    drawDatShit(x, y, size, n - 1);
  }
}
drawDatShit(x, y, side, sequence);

// x = x / 3;
// side = side / 3;

// ctx.strokeRect(size, 0, size, size);
// ctx.strokeRect(0, size, size, size);
// ctx.strokeRect(size * 2, size, size, size);
// ctx.strokeRect(size, size * 2, size, size);
