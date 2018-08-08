'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

let defX: number = Math.floor((Math.random() * 550) + 1);
let defY: number = Math.floor((Math.random() * 350) + 1);
let squareCount: number = 3;

function drawSquare(x: number, y: number) {
    for (let i: number = 0; i < squareCount; i++) {
        ctx.beginPath();
        ctx.strokeRect(defX, defY, 50, 50);
        defX = Math.floor((Math.random() * 550) + 1);
        defY = Math.floor((Math.random() * 350) + 1);
    }
}
drawSquare(defX, defY);