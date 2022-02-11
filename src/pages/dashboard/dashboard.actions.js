import axios from 'axios';
import { mockApiUrl } from 'common/constants';

import {
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  CLEAR_DASHBOARD_STATE,
} from './dashboard.constants';

/**
 * Update User
 */

const getUpdateUserActionStart = () => {
  return {
    type: UPDATE_USER_START,
    payload: null,
  };
};

const getUpdateUserActionSuccess = (user) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: user,
  };
};

export const updateUser = (userId, userData) => {
  return (dispatch) => {
    dispatch(getUpdateUserActionStart());
    axios.put(`${mockApiUrl}/users/${userId}`, userData).then((response) => {
      dispatch(getUpdateUserActionSuccess(response.data));
    });
  };
};

/**
 * Clear Dashboard State
 */

export const getClearDashboardStateAction = () => {
  return {
    type: CLEAR_DASHBOARD_STATE,
    payload: null,
  };
};

export const clearDashboardState = () => {
  return (dispatch) => {
    dispatch(getClearDashboardStateAction());
  };
};
