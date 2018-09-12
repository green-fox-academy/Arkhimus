'use strict';

let asteroidList = document.querySelector('ul.asteroids');

let newAsteroidGreenFox = document.createElement('li');
newAsteroidGreenFox.id = 'b555';
newAsteroidGreenFox.textContent = 'The Green Fox';

let newAsteroidLamp = document.createElement('li');
newAsteroidLamp.id = 'b567';
newAsteroidLamp.textContent = 'The Lamplighter';

asteroidList.appendChild(newAsteroidGreenFox);
asteroidList.appendChild(newAsteroidLamp);

let heading = document.querySelector('div.container');

let newHeading = document.createElement('h1');
newHeading.id = 'heading1orWhatever';
newHeading.textContent = 'I can add elements to the DOM!';

heading.appendChild(newHeading);
