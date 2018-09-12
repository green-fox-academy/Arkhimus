'use strict';

let fillWithContent = document.getElementsByTagName('li');
let content = ['apple', 'banana', 'cat', 'dog'];

for (let index = 0; index < fillWithContent.length; index++) {
  fillWithContent[index].innerText = content[index];
}
