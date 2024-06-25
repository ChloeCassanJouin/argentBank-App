/*import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from '../actions/userProfile-Action';

const initialState = {
  profile: {},
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        error: null,
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default userReducer;*/