import axios from 'axios';

import { mockApiUrl } from 'common/constants';

import { GET_USER_START, GET_USER_SUCCESS } from './profile.constants';

const getUserStart = () => {
  return {
    type: GET_USER_START,
    payload: null,
  };
};

const getUserSuccess = (usersData) => {
  return {
    type: GET_USER_SUCCESS,
    payload: usersData,
  };
};

export const getUsers = () => {
  return (dispatch) => {
    dispatch(getUserStart());

    axios.get(`${mockApiUrl}/users`).then((response) => {
      dispatch(getUserSuccess(response.data));
    });
  };
};
