import { combineReducers } from 'redux';

import appReducer from 'containers/App/store/reducer';
import usersReducer from 'containers/Users/store/reducer';

const mainReducer = combineReducers({
  app: appReducer,
  users: usersReducer
});

export default mainReducer;
