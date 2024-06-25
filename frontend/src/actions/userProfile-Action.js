/*import { getUserProfileAPI, updateUserProfileAPI } from '../API/api-UserProfile';
import { getToken } from '../utils/localStorage';

export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';

export const getUserProfile = () => async (dispatch) => {
  const token = getToken();
  if (!token) return;
  try {
    const data = await getUserProfileAPI(token);
    dispatch({ type: GET_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PROFILE_FAILURE, error });
  }
};*/