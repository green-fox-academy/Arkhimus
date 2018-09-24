'use strict';

function cardCheck(checkElement) {
  let regexCards = /^([2-9]|[TJQKA])([CDHS])$/;
  return regexCards.test(checkElement);
}

module.exports = { cardCheck };
