import { combineReducers } from 'redux';

import profileReducer from 'pages/profile/profile.reducers';
import dashboardReducer from 'pages/dashboard/dashboard.reducers';
import signUpReducer from 'pages/sign-up/sign-up.reducers';
import signInReducer from 'pages/sign-in/sign-in.reducers';

export default combineReducers({
  profileReducer,
  dashboardReducer,
  signUpReducer,
  signInReducer,
});
