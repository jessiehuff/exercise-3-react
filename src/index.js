import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './stores';


const store = configureStore();
const rootEl = document.getElementById('root');

function render() {
  const Routes = require('./Routes').default;
  ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    rootEl
  );
}

if (module.hot) {
  module.hot.accept('./Routes', render);
}

render();
