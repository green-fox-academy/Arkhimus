'use strict';

let allP = document.querySelectorAll('p');

if (allP[3].classList.contains('dolphin')) {
  allP[0].innerText = 'pear';
}

if (allP[0].classList.contains('apple')) {
  allP[2].innerText = 'dog';
}

allP[0].classList.add('red');

allP[1].style.borderRadius = '10%';
