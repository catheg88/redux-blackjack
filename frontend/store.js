import { createStore, combineReducers } from 'redux';
import CardReducer from './reducers/card_reducer.js';

// const RootReducer = combineReducers({
//   cards: CardReducer
// });
// 
// const Store = createStore(
//   RootReducer
// );

const Store = createStore(
  CardReducer
);

export default Store;
