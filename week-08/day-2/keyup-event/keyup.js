'use strict';

const h1 = document.querySelector('h1');

document.addEventListener('keyup', (event) => {
  h1.innerHTML = `Last pressed key code is: ${event.keyCode}`;
  console.log(event.keyCode);
});
