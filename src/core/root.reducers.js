import { combineReducers } from 'redux';

import homeReducer from 'pages/home/home.reducers';
import dashboardReducer from 'pages/dashboard/dashboard.reducers';

export default combineReducers({
  homeReducer,
  dashboardReducer,
});
