import _shuffle from 'lodash.shuffle';

const deck = [];

const suits = ["hearts", "spades", "diamonds", "clubs"];
const valueToNameMap = {
  1: "Ace",
  11: "Jack",
  12: "Queen",
  13: "King"
};

var makeCard = function (suit, value) {
  var card = {};
  card.suit = suit;
  card.value = value;
  card.name = function() {
    if ( valueToNameMap[card.value] === undefined ) {
      return card.value;
    }
    return valueToNameMap[card.value];
  }();
  return card;
};

for (var i = 1; i < 14; i++) {
  suits.forEach(function(suit) {
    var card = makeCard(suit, i);
    deck.push(card);
  })
};

var Deck = _shuffle(deck);

export default Deck;
