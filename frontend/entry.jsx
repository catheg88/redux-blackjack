import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store.js';
import Actions from './actions/actions';
import ButtonsContainer from './components/buttons_container.js';
import HandContainer from './components/hand_container.js';

// window.Store = Store;
// window.Actions = Actions

const RootComponent = () => (
  <Provider store={Store}>
    <div>
      <ButtonsContainer />
      <HandContainer />
    </div>
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<RootComponent />, root);
  // Store.dispatch("")
})
