import Deck from '../util/deck.js';

const CardReducer = (state = { deck: Deck, hand: [], score: 0 },  action) => {
  console.log("reducing");
  console.log("action: ");
  console.log(action)

  var _deck = [...state.deck];
  var _hand = [...state.hand];

  switch(action.type) {
    case "HIT":
      console.log("hitting");
      console.log(action.too);
      var newCard = _deck.pop();
      state.score += newCard.value;
      _hand.push(newCard);
      break;
    case "RESET":
      console.log('resetting');
      _deck = Deck;
      _hand = [];
      state.score = 0;
    };

  return Object.assign({}, state, {
    hand: _hand,
    deck: _deck
  });

};

export default CardReducer;
