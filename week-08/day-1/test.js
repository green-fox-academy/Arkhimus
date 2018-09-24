'use strict';

const tape = require('tape');
const businessLogic = require('./pokerWinner');
const card = require('./cards');


tape.test('One plus one equals two (bro)', t => {
  t.equal(2, businessLogic.addThreeNumberz(1, 1, 0));
  t.end();
});

tape.test('Is it a card?', t => {
  let cardOrNot = '2D';
  t.equal(true, card.cardCheck(cardOrNot));
  t.end();
});
