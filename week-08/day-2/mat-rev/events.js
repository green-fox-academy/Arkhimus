'use strict';

const click = document.querySelector('.click');
const hover = document.querySelector('.hover');
const leave = document.querySelector('.leave');
const key = document.querySelector('.key');
const bubbling = document.querySelector('.bubbling');

const blur = document.querySelector('.blur');
const change = document.querySelector('.change');
const focus = document.querySelector('.focus');
const select = document.querySelector('.select');

const form = document.querySelector('.form');

const getRandom = () => {
  return Math.floor(Math.random() * 255);
};

const getRandomColor = () => {
  return `rgb(${getRandom()},${getRandom()},${getRandom()})`;
};

const callback = (event) => {
  event.target.style.backgroundColor = getRandomColor();
};

click.addEventListener('click', callback);
hover.addEventListener('mouseenter', callback);
leave.addEventListener('mouseleave', callback);

blur.addEventListener('blur', callback);
change.addEventListener('change', callback);
focus.addEventListener('focus', callback);
select.addEventListener('select', callback);

document.addEventListener('keyup', (event) => {
  key.innerHTML = `The key code is: ${event.keyCode}`;
  console.log(event.keyCode);
});

bubbling.addEventListener('click', (event) => {
  if (event.target.dataset.cica === 'one') {
    console.log(event.target.innerHTML);
  } else if (event.target.dataset.cica === 'two') {
    console.log(event.target.innerHTML);
  }
});

let contentObject = {}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const {blur, change, focus, select} = event.target.elements;
  contentObject = {
    blur: blur.value,
    change: change.value,
    focus: focus.value,
    select: select.value
  }
  console.log(contentObject);
});

// click.onclick = callback;
// hover.onmouseenter = callback;

// click.addEventListener('click', (event) => {
//   click.style.backgroundColor = getRandomColor();
// });
