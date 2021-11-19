import { GET_USER_START, GET_USER_SUCCESS } from './profile.constants';

const initialState = {
  users: null,
  isLoading: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_START: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    }

    default:
      return state;
  }
};

export default profileReducer;
