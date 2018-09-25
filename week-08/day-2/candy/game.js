'use strict';

const candies = document.querySelector('.candies');
const createCandies = document.querySelector('.create-candies');

let currentCandies =  10000;
candies.innerText = currentCandies;

createCandies.addEventListener('click', () => {
  currentCandies++;
  candies.innerText = currentCandies;
});