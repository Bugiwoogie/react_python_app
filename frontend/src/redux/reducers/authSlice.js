import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, user) => {
      state.isAuthenticated = true;
      state.user = user;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    registrationSuccess: (state, user) => {
      state.isAuthenticated = true
      state.user = user;
    }
  },
});

export const { loginSuccess, logout, registrationSuccess } = authSlice.actions;
export default authSlice.reducer;