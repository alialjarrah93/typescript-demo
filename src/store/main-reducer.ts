import { combineReducers } from 'redux';

import appReducer, { AppState } from 'containers/App/store/reducer';
import dashboardReducer, {
  DashboardState
} from 'containers/Dashboard/store/reducer';

export interface StoreState {
  app: AppState;
  dashboard: DashboardState;
}

const mainReducer = combineReducers({
  app: appReducer,
  dashboard: dashboardReducer
});

// const rootReducer = (state, action) => mainReducer(state, action);

export default mainReducer;
