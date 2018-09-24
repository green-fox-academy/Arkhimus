'use strict';

function cardCheck(checkElement) {
  let regexCards = /^([2-9]|[TJQKA])([CDHS])$/;
  return regexCards.test(checkElement);
}

function handCheck(hand) {
  return hand.length === 5;
}

module.exports = { cardCheck, handCheck };
