import { createSlice } from '@reduxjs/toolkit';

const initialState = { // initial states
  render_topbar: true,
  render_sign_in: true,
  render_sign_up: true
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    hideTopbar: (state) => {
      state.render_topbar = false;
    },
    showTopbar: (state) => {
      state.render_topbar = true;
    },
    hideSignIn: (state) => {
      state.render_sign_in = false;
    },
    showSignIn: (state) => {
      state.render_sign_in = true;
    },
    hideSignUp: (state) => {
      state.render_sign_up = false;
    },
    showSignUp: (state) => {
      state.render_sign_up = true;
    },
  },
});

export const { hideTopbar, showTopbar, hideSignIn, showSignIn, hideSignUp, showSignUp } = uiSlice.actions;
export default uiSlice.reducer;