import { GET_USERS_SUCCESS } from './sign-in-constants';

const initialState = {
  dataUsers: [],
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        dataUsers: action.payload,
      };
    }
    default:
      return state;
  }
};

export default signInReducer;
