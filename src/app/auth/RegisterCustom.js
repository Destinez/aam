import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const axios = require('axios').default;


export class RegisterCustom extends Component {

  constructor(props){

    super(props);
    this.state = {first_name: '', last_name: '', email: '', password: '', confirm_password: '', token: '', type: '', message: ''};

    // const { token } = useParams()
    // this.setState({token: token})

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleType = this.handleType.bind(this);
    // this.handleToken = this.handleToken.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstName(e){
    this.setState({
      first_name: e.target.value
    })
  }
  handleLastName(e){
    this.setState({
      last_name: e.target.value
    })
  }
  handleEmail(e){
    this.setState({
      email: e.target.value
    })
  }
  handlePassword(e){
    this.setState({
      password: e.target.value
    })
  }
  handleConfirmPassword(e){
    this.setState({
      confirm_password: e.target.value
    })
  }
  handleType(e){
    this.setState({
      type: e.target.value
    })
  }
  // handleToken(e){
  //   this.setState({
  //     token: e.target.value
  //   })
  // }

  handleMessage(msg){
    this.setState({
      message: msg
    })
  }
  

  
  handleSubmit(e){
    e.preventDefault();

    const user = JSON.stringify({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password : this.state.password,
      confirm_password : this.state.confirm_password,
    })

    if (user.password !== user.confirm_password) {

      let msg = "Password doesn't match"
      this.handleMessage(msg)
    }

    else{
      axios({
        method: 'post',
        url: '/api/register',
        data: user,
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    
  }


  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-6 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo d-flex justify-content-center">
                  <img src={require("../../assets/images/logo.png")} alt="logo" />
                </div>

                <h4>Sign Up</h4>
                <form className="pt-3" onSubmit = { this.handleSubmit } method='post'>
                  {/* <span className='message'>{this.handleMessage}</span> */}
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control form-control-lg" id="exampleInputFirstName" name='first_name' placeholder="Enter First Name" onChange={this.handleFirstName} />
                    </div>
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control form-control-lg" id="exampleInputLastName" name='last_name' placeholder="Enter Last Name" onChange={this.handleLastName} />
                    </div>
                  </div>    
                  
                 
                  <Form.Group>
                    <div className="input-group">
                      <Form.Control type="email" onChange={this.handleEmail} id="exampleInputEmail1" placeholder='Enter Custom Email' className="form-control" aria-label="Enter Email" />
                      <div className="input-group-append">
                        <span className="input-group-text text-dark">@digitalswitch.com</span>
                      </div>
                    </div>
                  </Form.Group>
                  
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword" name='password' placeholder="Password" onChange={this.handlePassword} />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" id="exampleInputConfirmPassword" name='confirm_password' placeholder="Confirm Password" />
                  </div>

                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputType" value="0" hidden name='type' />
                  </div>

                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" required className="form-check-input" />
                        <i className="input-helper"></i>
                        I agree to all Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="">SIGN UP</button>
                  </div>
                  <div className="text-center mt-4 font-weight-light" >
                    Already have an account? <Link to="/auth/login" className="text-primary">Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RegisterCustom
