import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Form } from 'react-bootstrap';
import setAuthToken from '../validation/authAuthToken'
const axios = require('axios').default;

function EmployeeDetails(){

  const { employeeId } = useParams()

  const [employeeDetails, setEmployeeDetails] = useState([])
  const [message, setMessage] = useState("")
  const [errorClass, setErrorClass] = useState("")
  
  useEffect(() => {
    let token = localStorage.getItem("token");
    setAuthToken(token);

    fetchEmployeeDetails(token)

  }, []);


  let fetchEmployeeDetails = (token) => {
    
    axios({
      method: 'get',
      url: `http://${process.env.REACT_APP_SERVER_URL}/api/employee-details/${employeeId}`,
      headers: {
          'authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
      }
    })
      
    .then(function (response) {
      let res = response.data
      
      if ( res.status === false && res.code === 423) {
          setMessage(res.message)
          setErrorClass('text-danger')
      }
      
      // else if (res[0].status === false && res[0].code === 403) {
      //     setMessage(res[0].message)
      //     setErrorClass('text-danger')
      // }

      else if (res.status === true && res.code === 200) {
          setEmployeeDetails(res.data)
          console.log(res.data)
      }
    })

    .catch(function (error) {
      console.log(error);
    })
  }


    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Employees </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="" onClick={event => event.preventDefault()}>Employees</a></li>
              <li className="breadcrumb-item active" aria-current="page">Employee Details</li>
            </ol>
          </nav>
        </div>
        <div className="row">   
          <div className="col-md-11 grid-margin stretch-card mx-auto">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-center">Employee Details</h4>
                <div className='container'>
                  <div className='employee-info'>
                      <div className='profile-picture d-flex justify-content-center'>
                        <img src={ employeeDetails.photo } className="img-fluid" ></img>
                      </div>
                      <h6 className={errorClass}>
                        { message }
                      </h6>
                      <div className='row'>
                        <div className='col-md-6'>
                          <span className='text-muted'>Name</span>
                          <p className='text-dark'>{ employeeDetails.last_name } { employeeDetails.first_name } { employeeDetails.middle_name }</p>
                        </div>
                        <div className='col-md-6'>
                          <span className='text-muted'>Role</span>
                          <p className='text-dark'>{ employeeDetails.role } </p>
                        </div>
                        
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <span className='text-muted'>Email</span>
                          <p className='text-dark'>{ employeeDetails.email }
                          </p>
                        </div>
                        <div className='col-md-6'>
                          <span className='text-muted'>Phone</span>
                          <p className='text-dark'>{ employeeDetails.phone_number ? employeeDetails.phone_number : "----" } </p>
                        </div>
                        
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <span className='text-muted'>Gender</span>
                          <p className='text-dark'>{ employeeDetails.gender ? employeeDetails.gender : "-----"}
                          </p>
                        </div>
                        <div className='col-md-6'>
                        <span className='text-muted'>Marital Status</span>
                          <p className='text-dark'>{ employeeDetails.marital_status ? employeeDetails.marital_status : "-----" }
                          </p>
                        </div>
                      </div>
                  </div>
                </div>
                
               
                {/* <button className="btn btn-primary">Add</button> */}
              </div>
            </div>
          </div>
      </div>
    </div>
    )
  }

export default EmployeeDetails
