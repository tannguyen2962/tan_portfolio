import axios from 'axios';

import { mockApiUrl } from 'common/constants';

import { GET_USER_START, GET_USER_SUCCESS } from './home.constants';

const getUserStart = () => {
  return {
    type: GET_USER_START,
    payload: null,
  };
};

const getUserSuccess = (userData) => {
  return {
    type: GET_USER_SUCCESS,
    payload: userData,
  };
};

export const getUser = (userId) => {
  return (dispatch) => {
    dispatch(getUserStart());

    axios.get(`${mockApiUrl}/users/${userId}`).then((response) => {
      dispatch(getUserSuccess(response.data));
    });
  };
};
