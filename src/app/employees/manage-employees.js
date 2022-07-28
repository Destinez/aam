import React, { Component, useEffect } from 'react'
import { ProgressBar } from 'react-bootstrap';
import setAuthToken from '../validation/authAuthToken'
const axios = require('axios').default;



function ManageEmployees(){

    useEffect(() => {
        let token = localStorage.getItem("token");
        setAuthToken(token);
        
    }, []);

    let token = localStorage.getItem("token")


    axios({
        method: 'get',
        url: `http://${process.env.REACT_APP_SERVER_URL}/api/employees`,
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          
        }
      })
        
      .then(function (response) {
        let res = response.data
        console.log(response.data)

        if (res.status === false && res.code === 424) {
            window.location.href = '/auth/verification-pending'
        }

        else if (res.status === true && res.code === 200) {
            
        }
        
      })

      .catch(function (error) {
        console.log(error);
      });


        
    return (
        <div>
            <div className="page-header">
            <h3 className="page-title"> Employees </h3>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Employees</a></li>
                <li className="breadcrumb-item active" aria-current="page">Manage Employees</li>
                </ol>
            </nav>
            </div>
    
            <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                <div className="card-body">
                    <h4 className="card-title">All Employers</h4>
                    <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>ID.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>2</td>
                            <td>
                                <div className="dropdown-item preview-item d-flex">
                                    <div className="preview-thumbnail">
                                        <img src={require("../../assets/images/faces/face4.jpg")} alt="user" className="profile-pic"/>
                                    </div>
                                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                        <p className="text-gray mb-0">
                                            Obaro Destiny Udurie
                                        </p>
                                    </div>
                                </div>
                                
                            </td>
                            <td>obarodestinez@digitalswitch.com</td>
                            <td>08193837836</td>
                            <td>
                                <select className="form-control" id="exampleFormControlSelect2" >
                                    <option className=''>Admin</option>
                                    <option className=''>Receiver</option>
                                    <option className=''>Sender</option>
                                    <option className=''>Receiver & Sender</option>
                                    <option className=''>ReadOnly</option>
                                </select>
                            </td>
                            <td>
                                <div className='action-icons d-flex justify-content-evenly'>
                                    <div className='view-button'>
                                        <i className="mdi mdi-eye text-warning"></i>
                                    </div>
                                    <div className='edit-button'>
                                        <i className="mdi mdi-pen text-info"></i>
                                    </div>
                                    <div className='delete-button'>
                                        <i className="mdi mdi-delete-outline text-danger"></i>
                                    </div>
                                    
                                    
                                </div>
                                
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            
            </div>
            </div>
        
        )   
  }


export default ManageEmployees
