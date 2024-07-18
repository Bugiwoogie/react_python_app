import React, { useState, useEffect, Fragment } from 'react'
import './style/App.css';
import Topbar from './components/navigation/topbar/Topbar';
import Sign_up from './components/pages/Sign_up';
import Sign_in from './components/pages/Sign_in';
import AiPartner from './components/pages/AiPartner'
import { useSelector } from 'react-redux';
import ForgotPassword from './components/pages/ForgotPassword';

function App() {
  // const [data, setData] = useState([{}])
  const current_path = window.location.pathname
  const render_topbar = useSelector((state) => state.ui.render_topbar);

  /*useEffect(() => {
    fetch("members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
      }
    )
  }, [])*/

  return (
    <Fragment>
      <div>
        {/* Topbar */}
        {(render_topbar) ? (
          <Topbar />
        ) : null}

        {/* User authentication */}
        {(current_path === "/sign_up") ? (
          <Sign_up />
        ) : null}
        {(current_path === "/sign_in") ? (
          <Sign_in />
        ) : null}
        {(current_path === "/forgot_password") ? (
          <ForgotPassword />
        ) : null}

        {(current_path === "/ai_partner") ? (
          <AiPartner />
        ) : null}         
      </div>
    </Fragment>
  )
}

export default App