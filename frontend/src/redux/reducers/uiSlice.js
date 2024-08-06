import { createSlice } from '@reduxjs/toolkit';

const initialState = { // initial states
  render_topbar: true,
  render_sign_in: true,
  render_sign_up: true,
  show_password_incorrect_on_registration_page: false
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
    showIncorrectPassword: (state) => {
      state.show_password_incorrect_on_registration_page = true
    },
    hideIncorrectPassword: (state) => {
      state.show_password_incorrect_on_registration_page = false
    }
  },
});

export const { hideTopbar, showTopbar, hideSignIn, showSignIn, hideSignUp, showSignUp, showIncorrectPassword, hideIncorrectPassword } = uiSlice.actions;
export default uiSlice.reducer;