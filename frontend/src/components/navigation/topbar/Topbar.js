import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';

const sign_button_style = {
  width: "2.9rem",
  fontSize: "0.55rem",
  marginRight: "25px"
}

function Topbar() {
  const render_sign_in = useSelector((state) => state.ui.render_sign_in);
  const render_sign_up = useSelector((state) => state.ui.render_sign_up);
  const is_authenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid row">
              <div className="col-1">
                <a className="navbar-brand" href="/">
                  <img 
                    src="../../../logo.jpg" 
                    alt="Logo" 
                    width="40" 
                    height="40" 
                    className="d-inline-block align-text-top" 
                    style={{borderRadius: "100%"}}>
                  </img>
                </a>
              </div>
              <div className="col-9">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      AI content
                  </button>
                  <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/">Create cover letter</a></li>
                      <li><a className="dropdown-item" href="/ai_partner">AI Girlfirend/Boyfriend</a></li>
                      <div className="dropdown-divider"></div>
                      <li><a className="dropdown-item" href="/image_generator">Image generation</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-2">
                <div className="row">
                  <div className="col">
                  </div>
                  {(is_authenticated) ? (
                    <Fragment>
                      <div className="col-5" style={{marginRight: "22px"}}>Welcome {(user) ? user.username : null}!</div>
                      <div className="col-3">Profile Settings</div>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <div className="col-5">
                        {(render_sign_in) ? (
                          <a 
                            href="/sign_in"
                            id="sign_in_button_topbar"
                            >
                            <button style={sign_button_style}>
                                Sign in
                            </button>
                          </a>
                        ) : null}
                      </div>
                      <div className="col-3">
                        {(render_sign_up) ? (
                          <a 
                            href="/sign_up"
                            id="sign_up_button_topbar">
                            <button style={sign_button_style}>
                              Sign up
                            </button>
                          </a>
                        ) : null}
                      </div>
                    </Fragment>
                  )}
                </div>
              </div>
          </div>
      </nav>
    </div>
  )
}

export default Topbar