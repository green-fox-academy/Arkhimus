'use strict';


let fillWithContent = document.getElementsByTagName('li');
let content = ['apple', 'banana', 'cat', 'dog'];

for (let index = 0; index < fillWithContent.length; index++) {
  fillWithContent[index].innerText = content[index];
}

let getGreen = document.getElementsByTagName('ul');
getGreen[0].setAttribute("style", "background-color: limegreen");
