import axios from 'axios';
import { mockApiUrl } from 'common/constants';
import { GET_USERS_START, GET_USERS_SUCCESS } from './sign-in-constants';

const getUsersStart = () => {
  return {
    type: GET_USERS_START,
    payload: null,
  };
};

const getUsersSuccess = (getData) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: getData,
  };
};

export const getUsers = () => {
  return (dispatch) => {
    dispatch(getUsersStart());
    axios.get(`${mockApiUrl}/users`).then((response) => {
      dispatch(getUsersSuccess(response.data));
    });
  };
};
