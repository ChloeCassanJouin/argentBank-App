import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || null,
  id: null,
  userName: '',
  email: '',
  firstName: '',
  lastName: '',
  createdAt: '',
  updatedAt: '',
  isLoggedIn: !!localStorage.getItem('token'),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    retrieveToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
      console.log('userSlice', state.token);
      state.isLoggedIn = true;
    },
    retrieveProfile: (state, action) => {
      const { id, userName, email, firstName, lastName, createdAt, updatedAt } = action.payload;
      if (!id || !userName || !email || !firstName || !lastName || !createdAt || !updatedAt) {
        console.error('Invalid payload:', action.payload);
        return;
      }
      state.id = id;
      state.userName = userName;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.createdAt = createdAt;
      state.updatedAt = updatedAt;
      console.log('Profile ID:', state.id);
      console.log('userSlice - Profile UserName:', state.userName);
      console.log('Profile Email:', state.email);
      console.log('Profile FirstName:', state.firstName);
      console.log('Profile LastName:', state.lastName);
      console.log('Profile CreatedAt:', state.createdAt);
      console.log('Profile UpdatedAt:', state.updatedAt);
    },
    updateProfile: (state, action) => {
      state.userName = action.payload;
      console.log('Updated UserName:', state.userName);
    },
    deleteProfile: (state) => {
      state.token = null;
      localStorage.removeItem('token');
      state.id = null;
      state.userName = '';
      state.email = '';
      state.firstName = '';
      state.lastName = '';
      state.createdAt = '';
      state.updatedAt = '';
      console.log('Profile deleted');
      state.isLoggedIn = false;
    },
  },
});

export const { 
  retrieveToken, 
  retrieveProfile, 
  updateProfile, 
  deleteProfile 
} = userSlice.actions;

export default userSlice.reducer;

/*import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: localStorage.getItem('token') || null,
    id: null,
    userName: '',
    email: '',
    firstName: '',
    lastName: '',
    createdAt: '',
    updatedAt: '',
  },
  reducers: {
    retrieveToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
      console.log('userSlice', state.token);
    },
    retrieveProfile: (state, action) => {
      const { id, userName, email, firstName, lastName, createdAt, updatedAt } = action.payload;
      if (!id || !userName || !email || !firstName || !lastName || !createdAt || !updatedAt) {
        console.error('Invalid payload:', action.payload);
        return;
      }
      state.id = id;
      state.userName = userName;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.createdAt = createdAt;
      state.updatedAt = updatedAt;
      console.log('Profile ID:', state.id);
      console.log('userSlice - Profile UserName:', state.userName);
      console.log('Profile Email:', state.email);
      console.log('Profile FirstName:', state.firstName);
      console.log('Profile LastName:', state.lastName);
      console.log('Profile CreatedAt:', state.createdAt);
      console.log('Profile UpdatedAt:', state.updatedAt);
    },
    updateProfile: (state, action) => {
      state.userName = action.payload;
      console.log('Updated UserName:', state.userName);
    },
    deleteProfile: (state) => {
      state.token = null;
      localStorage.removeItem('token');
      state.id = null;
      state.userName = '';
      state.email = '';
      state.firstName = '';
      state.lastName = '';
      state.createdAt = '';
      state.updatedAt = '';
      console.log('Profile deleted');
    },
  },
});

export const { 
  retrieveToken, 
  retrieveProfile, 
  updateProfile, 
  deleteProfile, 
} = userSlice.actions;

export default userSlice.reducer;*/