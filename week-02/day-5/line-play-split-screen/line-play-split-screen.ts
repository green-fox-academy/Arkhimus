'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let cw: number = 640 / 2;
let step: number = 40 / 2;
let startX: number = 0;
let startY: number = 0;
let split4: number = 4;
let split16: number = 8;
let split64: number = 32;



for (let k: number = 0; k < split4; k++) {
    for (let j: number = 0; j < split4; j++) {
        function drawGreenAndPurpleLines(canvasWidth: number, steps: number, startPointX: number, startPointY: number) {
            for (let i: number = 0; i < steps - 5; i++) {
                ctx.beginPath();
                ctx.strokeStyle = 'green';
                ctx.moveTo(startPointX, startPointY + steps * (i + 1));
                ctx.lineTo(startPointX + steps * (i + 2) - steps, startPointY + canvasWidth);
                ctx.stroke();
            }
            for (let i: number = 0; i < steps - 5; i++) {
                ctx.beginPath();
                ctx.strokeStyle = 'purple';
                ctx.moveTo(startPointX + canvasWidth - (steps * (i + 2) - steps), startPointY);
                ctx.lineTo(startPointX + canvasWidth, startPointY + canvasWidth - steps * (i + 1));
                ctx.stroke();
            }
        }
        drawGreenAndPurpleLines(cw, step, startX, startY);
        startY = startY + cw;
    }
    startX = startX + cw;
}