/*import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/auth-Actions';

const initialState = {
  token: null,
  name: '',
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        name: action.payload.name,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default authReducer;*/