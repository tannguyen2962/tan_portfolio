import axios from 'axios';
import { mockApiUrl } from 'common/constants';
import { POST_USER_START, POST_USER_SUCCESS } from './sign-up.constants';

const postUserStart = () => {
  return {
    type: POST_USER_START,
    payload: null,
  };
};

const postUserSuccess = (dataSignUp) => {
  return {
    type: POST_USER_SUCCESS,
    payload: dataSignUp,
  };
};

export const postUser = (userData) => {
  return (dispatch) => {
    dispatch(postUserStart());
    axios.post(`${mockApiUrl}/users/`, userData).then((response) => {
      dispatch(postUserSuccess(response.data));
    });
  };
};
