
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;

export const loginUser = (user) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const data = await getLoginUser(user);
    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFailure(error.toString()));
  }
};