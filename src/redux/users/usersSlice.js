import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signin, signup } from './userApi';
import storage from '../../app/localStorage';

const baseURL = process.env.REACT_APP_BASE_URL;

export const signinAsync = createAsyncThunk(
  'users/signin',
  async (args) => {
    const { username, password } = args;
    const response = await signin(baseURL, username, password);
    return response;
  },
);

export const signupAsync = createAsyncThunk(
  'users/signup',
  async (args) => {
    const { username, password, confirmation } = args;
    const response = await signup(baseURL, username, password, confirmation);
    return response;
  },
);

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    message: '',
  },
  reducers: {},
  extraReducers: {
    [signinAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [signinAsync.fulfilled]: (state, action) => {
      const { token, role, name } = action.payload;
      storage.save({ token, role, name });
    },
    [signinAsync.rejected]: (state, action) => {
      state.isError = true;
      state.message = action.payload.error;
    },
    [signupAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [signupAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
    },
    [signupAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.message = action.payload.status;
    },
  },
});

export default usersSlice.reducer;
