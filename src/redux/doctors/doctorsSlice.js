import { createSlice } from '@reduxjs/toolkit';
import getDoctors from './doctorsApi';

const initialState = [];

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {},
  extraReducers: {
    [getDoctors.fulfilled]: (state = initialState) => state,
  },
});

export default doctorsSlice.reducer;
