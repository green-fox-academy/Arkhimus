'use strict';

let allP = document.querySelectorAll('p');

if (allP[3].classList.contains('dolphin')) {
  allP[0].innerText = 'pear';
}

if (allP[0].classList.contains('apple')) {
  allP[2].innerText = 'dog';
}

allP[0].classList.add('red');

for (let i = 0; i < allP.length; i++) {
  if (allP[i].classList.contains('balloon')) {
    allP[i].setAttribute('style', 'border-radius: 10%;')
  }
}
