import { combineReducers } from 'redux';

import homeReducer from 'pages/home/home.reducers';
import dashboardReducer from 'pages/dashboard/dashboard.reducers';
import signUpReducer from 'pages/sign-up/sign-up.reducers';
import signInReducer from 'pages/sign-in/sign-in.reducers';

export default combineReducers({
  homeReducer,
  dashboardReducer,
  signUpReducer,
  signInReducer,
});
