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

tape.test('No double cards', t =>{
  let hand = ['2D', '4C', 'TC', 'AH', 'QS'];
  t.equal(card.noDouble(hand), undefined, 'You have no double cards.');
  t.end();
});

tape.test('No double cards', t =>{
  let hand = ['2D', '4C', '4C', 'AH', 'QS'];
  t.notOk(card.noDouble(hand), 'You have DOUBLE cards.');
  t.end();
});

/*
tape.test('Is it bigger?', t =>{
  let whiteHand = ['2D','3D','4D','5D','6D',];
  let whiteHand = ['2D','3D','4D','5D','6D',];
});
*/