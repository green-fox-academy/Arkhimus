'use strict';

const list = document.querySelector('ul');
const button = document.querySelector('button');
const result = document.querySelector('.result');

button.addEventListener('click', () => {
  result.innerHTML = list.childElementCount;
});