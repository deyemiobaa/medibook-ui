import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/users/usersSlice';
import doctorsReducer from '../redux/doctors/doctorsSlice';
import appointmentsReducer from '../redux/appointments/appointmentsSlice';

// Create the root reducer independently to obtain the RootState type

const rootReducer = combineReducers({
  users: userReducer,
  doctors: doctorsReducer,
  appointments: appointmentsReducer,
});

export default function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
