import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { hideSignIn } from '../../redux/reducers/uiSlice';
import { loginSuccess } from '../../redux/reducers/authSlice';

function Sign_in() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember_me, setRememberMe] = useState(true)
    const render_sign_in = useSelector((state) => state.ui.render_sign_in);
    
    if(render_sign_in) {
        dispatch(hideSignIn())
    }

    const style = {
        paddingLeft: "10%",
        paddingRight: "10%",
        paddingTop: "3%"
    }
    


    const handleSubmit = async (e) => {
        console.log("handling submit")
        e.preventDefault();
    
        try {
            const response = await axios.post('/login', {
              username,
              password,
            });
      
            if (response.data.success) {
              // Extract user information from the response
              const user = response.data.user; // Assuming your backend sends user data
      
              // Dispatch the loginSuccess action with user information
              dispatch(loginSuccess(user));
      
              // Handle successful login (e.g., redirect)
              console.log('Login successful:', user);
            } else {
              console.error('Login failed:', response.data.message);
              // Handle login errors (e.g., display error message)
            }
      
          } catch (error) {
            console.error('Login error:', error.response.data);
            // Handle network errors
          }
        };

    const handleChange = (event) => {
        const { value, name } = event.target;

        if (name === 'username_input') {
            setUsername(value);
        } else if (name === 'password_input') {
            setPassword(value);
        } else if (name === 'remember_me_checkbox') {
            setRememberMe(!remember_me)
        }
        };

      return (
        <Fragment>
            <div className="container-fluid" style={style}>
                <form onSubmit={handleSubmit}>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <input 
                            type="username" 
                            id="username_input" 
                            name="username_input"
                            className="form-control"
                            onChange={handleChange} 
                        />
                        <label className="form-label">Email address</label>
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <input 
                            type="password" 
                            id="password_input" 
                            name="password_input"
                            className="form-control"
                            onChange={handleChange} 
                        />
                        <label className="form-label">Password</label>
                    </div>
                    <div className="row mb-4">
                        <div className="col d-flex">
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    value="" 
                                    name="remember_me_checkbox"
                                    id="remember_me_checkbox" 
                                    onChange={handleChange}
                                    checked={remember_me} />
                                <label className="form-check-label"> Remember me </label>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <button  
                                    type="submit" 
                                    data-mdb-button-init 
                                    data-mdb-ripple-init 
                                    className="btn btn-primary btn-block mb-4 container d-flex"
                                    style={{textAlign: "center"}}>
                                        Sign in
                                </button>
                            </div>                            
                        </div>
                        <div className="col">
                            <a href="/forgot_password">Forgot password?</a>
                        </div>
                    </div>

                    <div className="text-center">
                        <p>Not a member? <a href="/sign_up">Register</a></p>
                        <p>or sign up with:</p>
                        <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-facebook-f"></i>
                        </button>

                        <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-google"></i>
                        </button>

                        <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-twitter"></i>
                        </button>

                        <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                            <i className="fa-brands fa-github"></i>
                        </button>
                    </div>
                </form>
            </div>
        </Fragment>

      );
}

export default Sign_in