import React, { useState, useEffect, Fragment } from 'react'
import './style/App.css';
import Topbar from './components/navigation/topbar/Topbar';
import Sign_up from './components/pages/Sign_up';
import Sign_in from './components/pages/Sign_in';
import AiPartner from './components/pages/AiPartner'
import { useSelector } from 'react-redux';

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
      {(render_topbar) ? (
        <Topbar />
      ) : null}

      {(current_path === "/sign_up") ? (
        <Sign_up />
      ) : null}

      {(current_path === "/sign_in") ? (
        <Sign_in />
      ) : null}
      {(current_path === "/ai_partner") ? (
        <AiPartner />
      ) : null}      

    </Fragment>
  )
}

export default App