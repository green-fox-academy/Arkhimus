'use strict';

let king = document.getElementById('b325');
console.log(king);

let businessLamp = document.getElementsByClassName('big');
console.log(businessLamp[0],businessLamp[1]);

let conceitedKing = document.querySelectorAll('.container .asteroid');
console.log(conceitedKing[0],conceitedKing[1]);

let noBusiness = conceitedKing + ' ' + document.getElementsByClassName('b329');
console.log(noBusiness);
