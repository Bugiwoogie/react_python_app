import React, { Fragment, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { hideSignUp } from '../../redux/reducers/uiSlice';
import { registrationSuccess } from '../../redux/reducers/authSlice';
import { showIncorrectPassword, hideIncorrectPassword } from '../../redux/reducers/uiSlice';

function Sign_up() {
    const dispatch = useDispatch();
    dispatch(hideSignUp())
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const show_password_incorrect = useSelector((state) => state.ui.show_password_incorrect_on_registration_page);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== password_confirmation) {
            dispatch(showIncorrectPassword())
        } else {
            dispatch(hideIncorrectPassword())
        }
    
        try {
            const response = await axios.post('/register', {
              username,
              email,
              password,
            });
      
            if (response.data.success) {
              // Extract user information from the response
              const user = response.data.user; // Assuming your backend sends user data
      
              // Dispatch the registrationSuccess action with user information
              dispatch(registrationSuccess(user));
      
              // Handle successful Registration (e.g., redirect)
              console.log('Registration successful:', user);
            } else {
              console.error('Registration failed:', response.data.message);
              // Handle Registration errors (e.g., display error message)
            }
      
          } catch (error) {
            console.error('Registration error:', error.response.data);
            // Handle network errors
          }
    };   
    
    const handleChange = (event) => {
        const { value, name } = event.target;

        if (name === 'username') {
            setUsername(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'password_confirmation') {
            setPasswordConfirmation(value);
        }
    };

    return (
        <Fragment>
            <section className="vh-100" style={{backgroundColor: "#eee"}}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{borderRadius: "25px"}}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input 
                                                        name="username"
                                                        type="text" 
                                                        id="username" 
                                                        className="form-control"
                                                        onChange={handleChange}/>
                                                        <label className="form-label">Userame</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input 
                                                        name="email"
                                                        type="email" 
                                                        id="email" 
                                                        className="form-control"
                                                        onChange={handleChange}/>
                                                        <label className="form-label">Email</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input 
                                                        name="password"
                                                        type="password" 
                                                        id="password" 
                                                        className="form-control"
                                                        onChange={handleChange}/>
                                                        <label className="form-label">Password</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                        <input
                                                        name="password_confirmation" 
                                                        type="password" 
                                                        id="password_confirmation" 
                                                        className="form-control"
                                                        onChange={handleChange}/>
                                                        <label className="form-label">Repeat your password</label>
                                                    </div>
                                                </div>
                                                {/*
                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                    <label className="form-check-label" for="form2Example3"> I agree all statements in <a href="#!">Terms of service</a></label>
                                                </div>                                                
                                                */}
                                                {(show_password_incorrect) ?
                                                   <span style={{color: "red"}}>your password does not match with the confirmation field.</span> 
                                                : null}
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button  
                                                        type="submit" 
                                                        data-mdb-button-init 
                                                        data-mdb-ripple-init 
                                                        className="btn btn-primary btn-lg">Register</button>
                                                </div>

                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img 
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" 
                                                alt="Sample image">
                                            </img>
                                        </div>
                                    </div>
                                    <div style={{textAlign: "center"}}>
                                        <p>or sign up with:</p>
                                        <button  
                                            type="button" 
                                            data-mdb-button-init 
                                            data-mdb-ripple-init 
                                            className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-facebook-f"></i>
                                        </button>
                                        <button  
                                            type="button" 
                                            data-mdb-button-init 
                                            data-mdb-ripple-init 
                                            className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-google"></i>
                                        </button>
                                        <button
                                            type="button" 
                                            data-mdb-button-init 
                                            data-mdb-ripple-init 
                                            className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-twitter"></i>
                                        </button>
                                        <button  
                                            type="button" 
                                            data-mdb-button-init 
                                            data-mdb-ripple-init 
                                            className="btn btn-link btn-floating mx-1">
                                            <i className="fa-brands fa-github"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Sign_up