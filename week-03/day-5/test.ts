// delete canvas
ctx.translate(125,125); // set canvas origo to there
ctx.rotate(40 * Math.PI/180); // rotate in this angle
ctx.canvas.clearRect(0,0,canvas.width, canvas.height);

//  save & restore

ctx.save();
ctx.restore();

// rotate

