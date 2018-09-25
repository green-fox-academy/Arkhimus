'use strict';

window.onload = () => {

  const button = document.querySelector('button');
  const h1 = document.querySelector('h1');

  let counter = 0;

  setTimeout(() => {
    button.addEventListener('click', () => {
      counter++;
      if (counter === 3) {
        h1.innerHTML = '5 seconds elapsed and clicked 3 times';
      }
    });
  }, 5000);
}
