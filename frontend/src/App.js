import React, { useState, useEffect, Fragment } from 'react';
import './style/App.css';
import axios from 'axios';
import Topbar from './components/navigation/topbar/Topbar';
import Sign_up from './components/pages/Sign_up';
import Sign_in from './components/pages/Sign_in';
import AiPartner from './components/pages/AiPartner';
import { useSelector, useDispatch } from 'react-redux';
import ForgotPassword from './components/pages/ForgotPassword';
import { csrfTokenReceived } from './redux/reducers/authSlice';

function App() {
  const current_path = window.location.pathname;
  const render_topbar = useSelector((state) => state.ui.render_topbar);
  const dispatch = useDispatch(); // Call useDispatch to get the dispatch function

  useEffect(() => {
    // Fetch CSRF token from the server
    axios.get('/csrf-token').then(response => {
      dispatch(csrfTokenReceived(response.data.csrf_token)); // Use the dispatch function
    });
  }, [dispatch]); // Include dispatch in the dependency array

  return (
    <Fragment>
      <div>
        {/* Topbar */}
        {render_topbar ? <Topbar /> : null}
        {/* User authentication */}
        {current_path === "/sign_up" ? <Sign_up /> : null}
        {current_path === "/sign_in" ? <Sign_in /> : null}
        {current_path === "/forgot_password" ? <ForgotPassword /> : null}
        {current_path === "/ai_partner" ? <AiPartner /> : null}
      </div>
    </Fragment>
  );
}

export default App;