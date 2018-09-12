'use strict';

let imgUrl = document.querySelector('img');
console.log(imgUrl.src);
imgUrl.src = "https://study.com/cimages/multimages/16/gray_wolf_5584759091_wikimedia.jpg";

let newLink = document.querySelector('a');
newLink.href = "https://www.greenfoxacademy.com/";

let secondButton = document.getElementsByClassName('this-one')[0];
secondButton.disabled = true;
secondButton.innerText = 'No no Mr. Super Man, there is no click here';
