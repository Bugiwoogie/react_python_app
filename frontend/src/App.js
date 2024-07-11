import React, { useState, useEffect, Fragment } from 'react'
import './style/App.css';
import Topbar from './components/navigation/topbar/Topbar';
import Sign_up from './components/pages/Sign_up';
import Sign_in from './components/pages/Sign_in';

function App() {
  const [data, setData] = useState([{}])
  const current_path = window.location.pathname

  useEffect(() => {
    fetch("members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <Fragment>
      <Topbar />

      {(current_path === "/sign_up") ? (
        <Sign_up />
      ) : null}

      {(current_path === "/sign_in") ? (
        <Sign_in />
      ) : null}

    </Fragment>
  )
}

export default App