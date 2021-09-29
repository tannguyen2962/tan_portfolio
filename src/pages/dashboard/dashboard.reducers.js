import { UPDATE_USER_START, UPDATE_USER_SUCCESS } from './dashboard.constants';

const initialState = {
  user: null,
  isLoading: false,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_START: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case UPDATE_USER_SUCCESS: {
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

export default dashboardReducer;
