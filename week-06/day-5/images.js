'use strict';

let pictureSource = ['pictures/images-of-nature-in-hd-nature-wallpapers-c2b7-pexels-c2b7-free-stock-photos-640x480.jpeg',
  'pictures/lots7-12-arnold-stock-ln-minocqua_165276-8-full.jpg',
  'pictures/nature-photo-gallery-wallpapers-nature-wallpapers-c2b7-pexels-c2b7-free-stock-photos-640x480.jpg',
  'pictures/shutterstock_409735069.jpg'];

let imgSource = '';

function nextPicture() {
  let counter = 0;
  for (let i = 0; i < pictureSource.length; i++) {
    const element = pictureSource[i];
    counter += 1;
    if (counter === pictureSource.length) {
      counter = 0;
    }
    return element;
  }
}