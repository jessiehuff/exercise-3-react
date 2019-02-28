import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/usersReducer';

function configureStore() {
  const store = applyMiddleware(thunk)(createStore)(reducers);

  //enable hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('./reducers', function() {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export {
  configureStore
};
