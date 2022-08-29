import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/users/usersSlice';
import appointmentsReducer from '../redux/appointments/appointmentsSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    appointments: appointmentsReducer,
  },
});

export default store;
