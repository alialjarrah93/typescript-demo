import ActionTypes from './action-types';
import { UsersAction, UsersGlobalState } from 'types';

const initialState: UsersGlobalState = {
  data: []
};

const appReducer = (
  state: UsersGlobalState = initialState,
  action: UsersAction
) => {
  switch (action.type) {
    case ActionTypes.FETCH_USERS:
      return {
        ...state,
        data: action.users
      };

    default:
      return state;
  }
};

export default appReducer;
