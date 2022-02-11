import {
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  CLEAR_DASHBOARD_STATE,
} from './dashboard.constants';

const initialState = {
  user: null,
  isLoading: false,
  isUpdateUserSuccess: false,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_START: {
      return {
        ...state,
        isLoading: true,
        isUpdateUserSuccess: false,
      };
    }

    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isUpdateUserSuccess: true,
        user: action.payload,
      };
    }

    case CLEAR_DASHBOARD_STATE: {
      return initialState;
    }

    default:
      return state;
  }
};

export default dashboardReducer;
