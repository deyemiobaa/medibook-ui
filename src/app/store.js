import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../redux/users/usersSlice';

const store = configureStore({
  reducer: {
    users: UserReducer,
  },
});

export default store;
