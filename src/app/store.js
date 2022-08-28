import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/users/usersSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
