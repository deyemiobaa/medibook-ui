import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const initialState = {
  loading: false,
  doctors: [],
  error: '',
};

export const fetchDoctors = createAsyncThunk('doctors/fetchDoctors', () => axios.get(baseURL)
  .then((res) => res.data));

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
  },
});

export default doctorsSlice.reducer;
