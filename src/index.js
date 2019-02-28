import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore} from './stores';
import './index.css'; 


const store = configureStore();
const rootEl = document.getElementById('root');

function render() {
  const App = require('./containers/App').default;
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl
  );
}

if (module.hot) {
  module.hot.accept('./containers/App', render);
}

render();
