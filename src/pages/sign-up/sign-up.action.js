import axios from 'axios';
import { mockApiUrl } from 'common/constants';
import { CREATE_USER_START, CREATE_USER_SUCCESS } from './sign-up.constants';

const createUserStart = () => {
  return {
    type: CREATE_USER_START,
    payload: null,
  };
};

const createUserSuccess = (dataSignUp) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: dataSignUp,
  };
};

export const createUser = (userData) => {
  return (dispatch) => {
    dispatch(createUserStart());
    axios.post(`${mockApiUrl}/users/`, userData).then((response) => {
      dispatch(createUserSuccess(response.data));
    });
  };
};
