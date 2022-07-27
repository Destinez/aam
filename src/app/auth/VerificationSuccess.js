import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Login extends Component {
  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto ">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo d-flex justify-content-center">
                  <img src={require("../../assets/images/logo.png")} alt="logo" />
                </div>
                <div className='d-flex justify-content-center'>
                  <h4 className='text-success'>
                    Verification Successful
                  </h4>
                </div>
                <Link className='btn btn-primary w-100' to="/auth/login">Back to Login</Link>
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}

export default Login
