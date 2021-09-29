import axios from 'axios';
import { mockApiUrl } from 'common/constants';

import { UPDATE_USER_START, UPDATE_USER_SUCCESS } from './dashboard.constants';

const updateUserStart = () => {
  return {
    type: UPDATE_USER_START,
    payload: null,
  };
};

const updateUserSuccess = (user) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: user,
  };
};

export const updateUser = (userId, userData) => {
  return (dispatch) => {
    dispatch(updateUserStart());
    axios.put(`${mockApiUrl}/users/${userId}`, userData).then((response) => {
      dispatch(updateUserSuccess(response.data));
    });
  };
};
