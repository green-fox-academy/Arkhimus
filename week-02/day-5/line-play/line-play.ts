'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let cw: number = 640;
let step: number = 40;
let start: number = 0;

function drawGreenAndPurpleLines(canvasWidth: number, steps: number, startPoint: number) {
    for (let i: number = 0; i < steps; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'green';
        ctx.moveTo(startPoint, steps * (i + 1));
        ctx.lineTo(steps * i - steps, canvasWidth);
        ctx.stroke();
    }
    for (let i: number = 0; i < steps; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'purple';
        ctx.moveTo(canvasWidth - (steps * i-steps), startPoint);
        ctx.lineTo(canvasWidth, canvasWidth - steps * (i + 1));
        ctx.stroke();
    }
}
drawGreenAndPurpleLines(cw, step, start);
