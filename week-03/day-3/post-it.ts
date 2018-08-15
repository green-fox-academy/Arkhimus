'use strict'

class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(backgroundColor: string, text: string, textColor: string) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }
}

let idea1: PostIt = new PostIt('orange', 'Idea 1', 'blue');
let awesome: PostIt = new PostIt('pink', 'Awesome', 'black');
let superb: PostIt = new PostIt('yellow', 'Superb!', 'green');

console.log(idea1);
console.log(awesome);
console.log(superb);