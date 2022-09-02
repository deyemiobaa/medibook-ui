import { usersSlice, signinAsync, signupAsync } from '../redux/users/usersSlice';

const initialState = {
  isLoading: false,
  message: '',
};

describe('usersSlice', () => {
  it('should return the initial state', () => {
    expect(usersSlice.reducer(undefined, { type: null })).toEqual(initialState);
  });

  it('should handle signinAsync.pending', () => {
    expect(usersSlice.reducer(initialState, signinAsync.pending())).toEqual({
      isLoading: true,
      message: '',
    });
  });

  it('should handle signinAsync.fulfilled', () => {
    expect(usersSlice.reducer(
      initialState,
      {
        type: signinAsync.fulfilled,
        payload: {
          token: 'token',
          role: 'role',
          name: 'name',
        },
      },
    )).toEqual({
      isLoading: false,
      message: '',
      token: 'token',
    });
  });

  it('should handle signupAsync.pending', () => {
    expect(usersSlice.reducer(initialState, signupAsync.pending())).toEqual({
      isLoading: true,
      message: '',
    });
  });

  it('should handle signupAsync.fulfilled', () => {
    expect(usersSlice.reducer(
      initialState,
      {
        type: signupAsync.fulfilled,
        payload: {
          message: 'message',
        },
      },
    )).toEqual({
      isLoading: false,
      message: 'message',
    });
  });
});
