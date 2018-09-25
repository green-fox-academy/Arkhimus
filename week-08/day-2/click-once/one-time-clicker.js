'use strict';

const btn = document.querySelector('button');
Date.now = function () { return new Date().getTime(); }  // stackoverflow
// const date = new Date().getTime(); //gives the timestamp but not refresh it for the rest of the clicks


// btn.addEventListener('click', () => {
//   console.log(Date.now());
//   btn.disabled = true;
// });

const time = () => {
  console.log(new Date());
  btn.removeEventListener('click', time);
}

btn.addEventListener('click', time);