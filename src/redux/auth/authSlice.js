import { loginUser, logoutUser, registerUser } from './authOperations';

const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
    isLoading: false,
    error: null,
  },
  redusers: {},
  extraReducers: {
    //register
    [registerUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [registerUser.fulfilled]: (state, { payload }) => ({
      ...state,
      ...payload,
      isLoading: false,
    }),
    //login
    [loginUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [loginUser.fulfilled]: (state, { payload }) => ({
      ...state,
      ...payload,
      isLoading: false,
    }),
    //logout
    [logoutUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [logoutUser.fulfilled]: state => {
      state.token = null;
      state.user = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export default authSlice.reducer;
