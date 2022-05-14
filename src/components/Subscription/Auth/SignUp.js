import React, { Component } from 'react'
import '../assets/css/bootstrap.min.css'
import '../assets/css/app.css'
import { Link } from 'react-router-dom'
import Logo from '../../NavBar/logo/3.png'

export default class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      inProgress: false,
      progressText: '🏗️  Processing...',
      lifetime: false,
      agreeCheck: false
    }
    this.progressTimer = null;
  }


  render() {
    return (
      <div className="auth-page-wrapper pt-5">
        <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
          <div className="bg-overlay"></div>

          <div className="shape">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xlinkHref="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                  <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
              </svg>
          </div>
        </div>

        <div className="auth-page-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center mt-sm-5 mb-4 text-white-50">
                            <div>
                              <img src={ Logo } alt="" height="100" />
                            </div>
                            <p className="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mt-5">
                    <div className="col-md-8 col-lg-6 col-xl-5 mt-5">
                        <div className="card mt-4">

                            <div className="card-body p-4">
                                <div className="text-center mt-2">
                                    <h5 className="text-primary">Create New Account</h5>
                                    <p className="text-muted">Get your free velzon account now</p>
                                </div>
                                <div className="p-2 mt-4">
                                    <form className="needs-validation" novalidate action="index.html">

                                        <div className="mb-3">
                                            <input type="email" className="form-control" id="useremail" placeholder="Enter email address" required />
                                            <div className="invalid-feedback">
                                                Please enter email
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" id="username" placeholder="Enter username" required />
                                            <div className="invalid-feedback">
                                                Please enter username
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <div className="position-relative auth-pass-inputgroup">
                                                <input type="password" className="form-control pe-5 password-input" onpaste="return false" placeholder="Enter password" id="password-input" aria-describedby="passwordInput" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
                                                <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>
                                                <div className="invalid-feedback">
                                                    Please enter password
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <p className="mb-0 fs-12 text-muted fst-italic">By registering you agree to the Data Factory <a href="#" className="text-primary text-decoration-underline fst-normal fw-medium">Terms of Use</a></p>
                                        </div>

                                        <div id="password-contain" className="p-3 bg-light mb-2 rounded">
                                            <h5 className="fs-13">Password must contain:</h5>
                                            <p id="pass-length" className="invalid fs-12 mb-2">Minimum <b>8 characters</b></p>
                                            <p id="pass-lower" className="invalid fs-12 mb-2">At <b>lowercase</b> letter (a-z)</p>
                                            <p id="pass-upper" className="invalid fs-12 mb-2">At least <b>uppercase</b> letter (A-Z)</p>
                                            <p id="pass-number" className="invalid fs-12 mb-0">A least <b>number</b> (0-9)</p>
                                        </div>

                                        <div className="mt-4">
                                            <button className="btn btn-success w-100" type="submit">Sign Up</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                        <div className="mt-4 text-center mb-4">
                          <p className="mb-0">Already have an account ? 
                            <Link className="fw-semibold text-primary text-decoration-underline" to="/signin"> Signin </Link> 
                            &nbsp;<Link className="fw-semibold text-success" to="/"> Back </Link>
                          </p>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
