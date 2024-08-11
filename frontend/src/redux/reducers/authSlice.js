import { createSlice } from '@reduxjs/toolkit';

// Load user from local storage if available
const initialUser = JSON.parse(localStorage.getItem('user'));
if (!initialUser) {
  const initialUser = JSON.parse(sessionStorage.getItem('user'))
}

const initialCsrfToken = JSON.parse(sessionStorage.getItem("csrf_token"))

const initialState = {
  isAuthenticated: (initialUser) ? true : false,
  user: initialUser,
  csrf_token: initialCsrfToken
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, user) => {
      state.isAuthenticated = true;
      state.user = user.payload;
      sessionStorage.setItem('user', JSON.stringify(user.payload));
    },
    loginSuccessRemember: (state, user) => {
      state.isAuthenticated = true;
      state.user = user.payload;
      localStorage.setItem('user', JSON.stringify(user.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    registrationSuccess: (state, user) => {
      state.isAuthenticated = true
      state.user = user;
    },
    csrfTokenReceived: (state, token) => {
      state.csrf_token = token
      sessionStorage.setItem("csrf_token", JSON.stringify(token))
    }
  },
});

export const { loginSuccess, loginSuccessRemember, logout, registrationSuccess, csrfTokenReceived } = authSlice.actions;
export default authSlice.reducer;