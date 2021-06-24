import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import mainReducer from './main-reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];

const store = createStore(
  mainReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
