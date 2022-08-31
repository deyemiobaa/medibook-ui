import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cancelAppointment, getAllAppointments, scheduleAppointment } from './appointmentsApi';
import storage from '../../app/localStorage';

const baseURL = process.env.REACT_APP_BASE_URL;
const token = storage.get('token');

export const getAllAppointmentsAsync = createAsyncThunk(
  'appointments/getAllAppointments',
  async () => {
    const response = await getAllAppointments(baseURL, token);
    return response;
  },
);

export const scheduleAppointmentAsync = createAsyncThunk(
  'appointments/scheduleAppointment',
  async (args) => {
    const { date, duration, doctorId } = args;
    const response = await scheduleAppointment(baseURL, token, date, duration, doctorId);
    return response;
  },
);

export const cancelAppointmentAsync = createAsyncThunk(
  'appointments/cancelAppointment',
  async (id) => {
    const response = await cancelAppointment(baseURL, token, id);
    return response;
  },
);

export const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: {
    appointments: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getAllAppointmentsAsync.pending]: (state) => {
      state.loading = true;
    },
    [getAllAppointmentsAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.appointments = action.payload;
    },
    [getAllAppointmentsAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [scheduleAppointmentAsync.pending]: (state) => {
      state.loading = true;
    },
    [scheduleAppointmentAsync.fulfilled]: (state) => {
      state.loading = false;
    },
    [scheduleAppointmentAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [cancelAppointmentAsync.pending]: (state) => {
      state.loading = true;
    },
    [cancelAppointmentAsync.fulfilled]: (state) => {
      state.loading = false;
    },
    [cancelAppointmentAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default appointmentsSlice.reducer;
