import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/usersReducer';

function configureStore() {
  const store = applyMiddleware(thunk)(createStore)(reducers);

  if (module.hot) {
    module.hot.accept('./reducers/usersReducer', function() {
      const nextRootReducer = require('./reducers/usersReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export {
  configureStore
};
