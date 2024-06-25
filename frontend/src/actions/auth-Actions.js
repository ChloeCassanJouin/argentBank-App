/*import { loginUser, signupUser } from '../API/api-auth';
import { saveToken, saveUserName } from '../utils/localStorage';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginUser = (user) => async (dispatch) => {
  try {
    const data = await loginUser(user);
    saveToken(data.token);
    saveUserName(data.name);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, error });
  }
};*/