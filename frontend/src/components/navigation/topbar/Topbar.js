import React from 'react'
import { useSelector } from 'react-redux';

const sign_button_style = {
  width: "2.9rem",
  fontSize: "0.55rem",
  marginRight: "25px"
}

function Topbar() {
  const render_sign_in = useSelector((state) => state.ui.render_sign_in);
  const render_sign_up = useSelector((state) => state.ui.render_sign_up);
  
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
                    {(render_sign_in) ? (
                      <a href="/sign_in">
                        <button style={sign_button_style}>
                            Sign in
                        </button>
                      </a>
                    ) : null}
                  </div>
                  <div className="col-3">
                    {(render_sign_up) ? (
                      <a href="/sign_up">
                        <button style={sign_button_style}>
                          Sign up
                        </button>
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
          </div>
      </nav>
    </div>
  )
}

export default Topbar