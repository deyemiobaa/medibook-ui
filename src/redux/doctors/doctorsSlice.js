import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getDoctors from './doctorsApi';

const baseURL = process.env.REACT_APP_BASE_URL;

export const fetchDoctors = createAsyncThunk('doctors/fetchDoctors', async () => {
  const doctors = await getDoctors(baseURL);
  return doctors;
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
  },
});

export default doctorsSlice.reducer;
