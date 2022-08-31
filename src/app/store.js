import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/users/usersSlice';
import doctorsReducer from '../redux/doctors/doctorsSlice';
import appointmentsReducer from '../redux/appointments/appointmentsSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    doctors: doctorsReducer,
    appointments: appointmentsReducer,
  },
});

export default store;
