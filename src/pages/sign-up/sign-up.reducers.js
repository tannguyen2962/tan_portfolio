import { CREATE_USER_START, CREATE_USER_SUCCESS } from './sign-up.constants';

const initialState = {
  user: null,
  isCreateUserLoading: false,
  isCreateUserSuccess: false,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_START: {
      return {
        isCreateUserLoading: true,
        isCreateUserSuccess: false,
        ...state,
      };
    }

    case CREATE_USER_SUCCESS: {
      return {
        ...state,
        isCreateUserLoading: false,
        isCreateUserSuccess: true,
        user: action.payload,
      };
    }

    default:
      return state;
  }
};
export default signUpReducer;
