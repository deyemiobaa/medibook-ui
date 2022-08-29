import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/users/usersSlice';
import doctorsSlice from '../redux/doctors/doctorsSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    doctors: doctorsSlice,
  },
});

export default store;
