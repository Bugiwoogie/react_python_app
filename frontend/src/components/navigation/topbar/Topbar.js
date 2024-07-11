import React from 'react'

const sign_button_style = {
  width: "2.9rem",
  fontSize: "0.55rem",
  marginRight: "25px"
}

function Topbar() {
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid row">
              <div className="col-1">
                <a className="navbar-brand" href="/">
                  <img 
                  src="../../../logo.jpg" 
                  alt="Logo" 
                  width="30" 
                  height="24" 
                  className="d-inline-block align-text-top" 
                  style={{borderRadius: "100%"}}>
                  </img>
                </a>
              </div>
              <div className="col-9">

              </div>
              <div className="col-2">
                <div className="row">
                  <div className="col">

                  </div>
                  <div className="col-5">
                    <a href="/sign_in">
                      <button style={sign_button_style}>
                        	Sign in
                      </button>
                    </a>
                  </div>
                  <div className="col-3">
                    <a href="/sign_up">
                      <button style={sign_button_style}>
                        Sign up
                      </button>
                    </a>
                  </div>
                </div>
              </div>
          </div>
      </nav>
    </div>
  )
}

export default Topbar