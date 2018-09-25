'use strict';

const button = document.querySelector('button');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');

const delayButton = () => {
  setTimeout(() => {
    h1.innerHTML = '2 seconds ellapsed';
  }, 2000);
}

button.addEventListener('click', delayButton);

// let h1111 = document.createElement('h1').innerText = '2 seconds ellapsed';

// const delayButton = () => {
//   setTimeout(() => {
//     body.appendChild(h1111);
//   }, 2000);
// }

// button.addEventListener('click', delayButton);