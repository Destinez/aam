import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import setAuthToken from '../validation/authAuthToken'
const axios = require('axios').default;

function InvitationLink(){

  const [error, setError] = useState("")
  const [errorClass, setErrorClass] = useState("")

  useEffect(() => {
    let token = localStorage.getItem("token");
    setAuthToken(token);

  }, []);

  let handleAdd = (e) => {

    let token = localStorage.getItem("token");
    setAuthToken(token);
    e.preventDefault()

    axios({
      method: 'post',
      url: `http://${process.env.REACT_APP_SERVER_URL}/api/generate-invitation-link`,
      headers: {
          'authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
      }
    })
      
    .then(function (response) {

      let res = response.data
      console.log(res)

      if (res.status === false && res.code === 424) {
          window.location.href = '/auth/verification-pending'
      }

      else if (res.status === true && res.code === 200) {
          setError(res.data)
          setErrorClass("text-success")
      }
      else if (res.status === false && res.code === 403) {
          setError(res.data)
          setErrorClass("text-success")
      }

      else if (res.status === false && res.code === 424) {
        setError(res.message)
        setErrorClass("text-center d-flex justify-content-center badge badge-danger")
      }

      else if (res.status === false && res.code === 422) {

        if (res.errors.first_name) {
          setError(res.errors.first_name[0])
        }
        else if (res.errors.last_name) {
          setError(res.errors.last_name[0])
        }
        else if (res.errors.email) {
          setError(res.errors.email[0])
        }
        else if (res.errors.gender) {
          setError(res.errors.gender[0])
        }
        else if (res.errors.role) {
          setError(res.errors.role[0])
        }
        else if (res.errors.marital_status) {
          setError(res.errors.marital_status[0])
        }
        else if (res.errors.employee_id) {
          setError(res.errors.employee_id[0])
        }

        setErrorClass("text-center d-flex justify-content-center badge badge-danger")
      }
    })

    .catch(function (error) {
      console.log(error);
    });

  }

    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Employees </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="" onClick={event => event.preventDefault()}>Employees</a></li>
              <li className="breadcrumb-item active" aria-current="page">Invite Employee</li>
            </ol>
          </nav>
        </div>
        <div className="row">   
          <div className="col-md-11 grid-margin stretch-card mx-auto">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-center">Create Invitation Link</h4>
                <div className='message-info'>
                    <h6 className={ errorClass }>
                      { error }
                    </h6>
                </div>
                <div className="invitation-link">
                  <div className='d-flex'>
                    <input type="radio" className="" name='type' value="1" />Allow any Email 
                  </div>
                  <div className='d-flex'>
                    <input type="radio" className="" name='type' value="0" />Allow Emails with only this Domain
                  </div>  
                </div>
                <div className="">
                <Form.Group>
                    <div className="input-group">
                      <Form.Control type="email" onChange={} id="exampleInputEmail1" placeholder='Enter Custom Email' className="form-control" aria-label="Enter Email" />
                      <div className="input-group-append">
                        <span className="input-group-text text-dark">@digitalswitch.com</span>
                      </div>
                    </div>
                  </Form.Group> 
                </div>
                
                <button onClick={handleAdd} className="btn btn-primary">Generate Link</button>
              </div>
            </div>
          </div>
      </div>
    </div>
    )
  }

export default InvitationLink
