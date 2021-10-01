import { POST_USER_START, POST_USER_SUCCESS } from './sign-up.constants';

const initialState = {
  user: null,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER_START: {
      return {
        ...state,
      };
    }

    case POST_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      };
    }

    default:
      return state;
  }
};
export default signUpReducer;
