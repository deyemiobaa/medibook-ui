import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getDoctors, { postDoctor, deleteDoctor } from './doctorsApi';

const baseURL = process.env.REACT_APP_BASE_URL;

export const fetchDoctors = createAsyncThunk('doctors/fetchDoctors', async () => {
  const doctors = await getDoctors(baseURL);
  return doctors;
});

export const postDoctors = createAsyncThunk('doctors/post', async (args) => {
  const {
    name, specialization, hourly, available, picture,
  } = args;
  const response = await postDoctor(baseURL, name, specialization, hourly, available, picture);
  return response;
});

export const deleteDoctors = createAsyncThunk('doctors/delete', async (id) => {
  const res = await deleteDoctor(baseURL, id);
  return res;
});

const initialState = {
  loading: false,
  doctors: [],
  error: '',
};

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  extraReducers: {
    [fetchDoctors.pending]: (state) => {
      state.loading = true;
    },
    [fetchDoctors.fulfilled]: (state, action) => {
      state.loading = false;
      state.doctors = action.payload;
      state.error = '';
    },
    [fetchDoctors.rejected]: (state, action) => {
      state.loading = false;
      state.doctors = [];
      state.error = action.error.message;
    },
    [postDoctors.fulfilled]: (state, action) => {
      state.loading = false;
      state.doctors = action.payload;
    },
    [deleteDoctor.fulfilled]: (state) => {
      state.loading = false;
    },
  },
});

export default doctorsSlice.reducer;
