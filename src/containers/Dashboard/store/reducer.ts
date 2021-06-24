import ActionTypes from './action-types';
import { DashboardAction, DashboardGlobalState } from 'types';

const initialState: DashboardGlobalState = {
  users: []
};

const appReducer = (
  state: DashboardGlobalState = initialState,
  action: DashboardAction
) => {
  switch (action.type) {
    case ActionTypes.FETCH_USERS:
      return {
        ...state,
        users: action.users
      };

    default:
      return state;
  }
};

export default appReducer;
