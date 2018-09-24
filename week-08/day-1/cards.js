'use strict';

function cardCheck(checkElement) {
  let regexCards = /^([2-9]|[TJQKA])([CDHS])$/;
  return regexCards.test(checkElement);
}

function handCheck(hand) {
  return hand.length === 5;
}

//let hand4 = ['2D', '4C', 'TC', 'AH', 'QS'];
//let hand5 = ['9D','8D','4D','5D','6D',];
function noDouble(hand){
  let sortedHand = hand.sort();
  sortedHand.forEach((element, index) => {
    return element[index] == element[index+1];
  });
}




module.exports = { cardCheck, handCheck, noDouble };
