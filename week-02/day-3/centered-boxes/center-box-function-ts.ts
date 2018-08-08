'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

let squareSize: number = Math.floor((Math.random() * 400) + 1);
let drawCount: number = 3;

function squareDraw(size: number) {
    for (let i: number = 0; i < drawCount; i++) {
        let squareSize: number = Math.floor((Math.random() * 400) + 1);
        let defX: number = 300 - (squareSize / 2);
        let defY: number = 200 - (squareSize / 2);
        ctx.beginPath();
        ctx.strokeRect(defX, defY, squareSize, squareSize);
        squareSize = Math.floor((Math.random() * 400) + 1);
        defX = 300 - (squareSize / 2);
        defY = 200 - (squareSize / 2);

    }
}
squareDraw(squareSize);