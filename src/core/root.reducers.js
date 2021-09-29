import { combineReducers } from 'redux';

import homeReducer from 'pages/home/home.reducers';
import dashboardReducer from 'pages/dashboard/dashboard.reducers';
import signUpReducer from 'pages/sign-up/sign-up.reducers';

export default combineReducers({
  homeReducer,
  dashboardReducer,
  signUpReducer,
});
