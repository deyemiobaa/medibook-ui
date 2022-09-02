import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDoctors, postDoctor, deleteDoctor } from './doctorsApi';

const baseURL = process.env.REACT_APP_BASE_URL;

export const getDoctorsAsync = createAsyncThunk('doctors/getDoctorsAsync', async () => {
  const doctors = await getDoctors(baseURL);
  return doctors;
});

export const postDoctorAsync = createAsyncThunk('doctors/post', async (args) => {
  const {
    name, specialization, hourly, available, picture,
  } = args;
  const response = await postDoctor(baseURL, name, specialization, hourly, available, picture);
  return response;
});

export const deleteDoctorAsync = createAsyncThunk('doctors/delete', async (id) => {
  const res = await deleteDoctor(baseURL, id);
  return res;
});

const initialState = {
  loading: false,
  doctors: [],
  message: '',
};

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  extraReducers: {
    [getDoctorsAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.doctors = action.payload;
    },
    [getDoctorsAsync.rejected]: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    [postDoctorAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    [deleteDoctorAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
  },
});

export default doctorsSlice.reducer;
