'use strict';

const candies = document.querySelector('.candies');
const lollypops = document.querySelector('.lollypops')
const createCandies = document.querySelector('.create-candies');
const buy = document.querySelector('.buy-lollypops');
const lollybutton = document.querySelector('.buy-lollypops');
const speed = document.querySelector('.speed');
const rainBabyRain = document.querySelector('.candy-machine');

let currentCandies = 1000;
let currentLollypops = lollypops.innerText;
let generateSpeed = 0;

candies.innerText = currentCandies;

createCandies.addEventListener('click', () => {
  currentCandies += 10;
  candies.innerText = currentCandies;
  if (currentCandies > 100) {
    lollybutton.disabled = false;
  }
});

lollybutton.addEventListener('click', () => {
  currentCandies -= 100;
  candies.innerText = currentCandies;
  lollypops.innerText = `${currentLollypops}🍭`;
  currentLollypops = lollypops.innerText;
  if (currentCandies < 100) {
    lollybutton.disabled = true;
  }
});

const candiesForLollypop = () => {
  if (currentLollypops.length / 2 >= 10) {
    currentCandies = currentCandies + generateSpeed;
    candies.innerText = currentCandies;
    candyCreation();
  }
}

const candyCreation = () => {
  if (currentLollypops.length / 2 >= 10) {
    generateSpeed = Math.floor((currentLollypops.length / 2) / 10);
    speed.innerText = generateSpeed;
  }
}

setInterval(candiesForLollypop, 1000);

rainBabyRain.addEventListener('click', () => {
  generateSpeed = generateSpeed * 10;
  speed.innerText = generateSpeed;
});
