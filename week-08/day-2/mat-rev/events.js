'use strict';

const click = document.querySelector('.click');
const hover = document.querySelector('.hover');

const getRandom = () => {
  return Math.floor(Math.random() * 255);
};

const getRandomColor = () => {
  return `rgb(${getRandom()},${getRandom()},${getRandom()})`;
};

click.addEventListener('click', (event) => {
  click.style.backgroundColor = getRandomColor();
});

hover.addEventListener('mouseenter', (event) => {
  hover.style.backgroundColor = getRandomColor();
});
