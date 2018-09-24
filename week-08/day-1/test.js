'use strict';

const tape = require('tape');
const card = require('./cards');

tape.test('Is it a card?', t => {
  let cardOrNot = '2D';
  t.ok(card.cardCheck(cardOrNot), 'It is a card bro');
  t.end();
});

tape.test('Is it a card?', t => {
  let cardOrNot = '2X';
  t.notOk(card.cardCheck(cardOrNot), 'It is NOT a card bro');
  t.end();
});

tape.test('Is it a hand?', t => {
  let hand = ['2D', '4C', 'TC', 'AH', 'QS'];
  t.ok(card.handCheck(hand), 'It is a hand sis');
  t.end();
});

tape.test('Is it a hand?', t => {
  let hand = ['2D', '4C', 'TC', 'AH', 'QS', 'AC'];
  t.notOk(card.handCheck(hand), 'You have too much cards (cheater)');
  t.end();
});

tape.test('Is it a hand?', t => {
  let hand = ['2D', '4C', 'TC', 'AH'];
  t.notOk(card.handCheck(hand), 'You have not enough cards');
  t.end();
});

tape.test('Is it a hand?', t => {
  let hand = [];
  t.notOk(card.handCheck(hand), 'You have no cards, you can not play');
  t.end();
});
