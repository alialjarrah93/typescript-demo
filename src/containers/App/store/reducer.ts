import Enums from 'constants/enums';

import ActionTypes from './action-types';
import { AppAction, AppGlobalState } from 'types';

const initialState = {
  accessToken: '',
  authStatus: Enums.app.status.none
};

const appReducer = (
  state: AppGlobalState = initialState,
  action: AppAction
) => {
  switch (action.type) {
    case ActionTypes.AUTHENTICATE_USER:
      return {
        ...state,
        authStatus: Enums.app.status.authenticated,
        accessToken: action.accessToken
      };
    case ActionTypes.UNAUTHENTICATE_USER:
      return {
        ...state,
        authStatus: Enums.app.status.unAuthenticated,
        accessToken: ''
      };
    default:
      return state;
  }
};

export default appReducer;
