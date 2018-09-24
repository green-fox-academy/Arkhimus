'use strict';

function cardCheck(checkElement) {
  let regexCards = /^([2-9]|[TJQKA])([CDHS])$/;
  return regexCards.test(checkElement);
}

function handCheck(hand) {
  return hand.length === 5;
}

function noDouble(hand) {
  let sortedHand = hand.sort();
  sortedHand.forEach((element, index) => {
    return element[index] == element[index + 1];
  });
}

function cardValue(card) {
  const cardIndex = [2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A'];
  return cardIndex.indexOf(card[0]);
}

function higherCard(cardOne, cardTwo) {
  if (cardValue(cardOne) > cardValue(cardTwo)) {
    return cardValue(cardOne);
  } else if (cardValue(cardOne) < cardValue(cardTwo)) {
    return cardValue(cardTwo);
  } else {
    return 0;
  }
}

module.exports = { cardCheck, handCheck, noDouble, cardValue, higherCard };
