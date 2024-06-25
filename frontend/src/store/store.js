/*import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice.js';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});*/

/*import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth-Reducer';
import userReducer from '../reducers/userProfile-Reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;*/