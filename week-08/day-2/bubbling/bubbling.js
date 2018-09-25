'use strict';

const nav = document.querySelector('nav');
const imgInspect = document.querySelector('.img-inspector');

let posX = 0;
let posY = 0;
let zoomSize = 200;

nav.addEventListener('click', (event) => {
  console.log(event);
  if (event.target.dataset.direction === 'up') {
    posY -= 10;
    imgInspect.style.backgroundPositionY = `${posY}px`;
  } else if (event.target.dataset.direction === 'down') {
    posY += 10;
    imgInspect.style.backgroundPositionY = `${posY}px`;
  } else if (event.target.dataset.direction === 'left') {
    posX -= 10;
    imgInspect.style.backgroundPositionX = `${posX}px`;
  } else if (event.target.dataset.direction === 'right') {
    posX += 10;
    imgInspect.style.backgroundPositionX = `${posX}px`;
  }
});

nav.addEventListener('click', (event) => {
  if (event.target.dataset.direction === 'in') {
    zoomSize += 20;
    imgInspect.style.backgroundSize = `${zoomSize}%`;
  } else if (event.target.dataset.direction === 'out') {
    zoomSize -= 20;
    imgInspect.style.backgroundSize = `${zoomSize}%`;
  }
});