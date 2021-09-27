import { GET_USER_START, GET_USER_SUCCESS } from './home.constants';

const initialState = {
  user: null,
  isLoading: false,
};

const homeReducer = (state = initialState, action) => {
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
        user: action.payload,
      };
    }

    default:
      return state;
  }
};

export default homeReducer;
