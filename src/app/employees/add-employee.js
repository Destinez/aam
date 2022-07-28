import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input'

export class BasicElements extends Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  componentDidMount() {
    bsCustomFileInput.init()
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Employees </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Employees</a></li>
              <li className="breadcrumb-item active" aria-current="page">Add Employee</li>
            </ol>
          </nav>
        </div>
        <div className="row">   
          <div className="col-md-11 grid-margin stretch-card mx-auto">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Register Employee</h4>

                {/* <Form.Group>
                  <input type="file" className='form-control' accept="image/*" />
                </Form.Group> */}
                <Form.Group>
                <label htmlFor="exampleFormControlSelect2">First Name</label>
                  <div className="input-group">
                    <Form.Control type="text" className="form-control" placeholder="First Name" aria-label="FirstName" aria-describedby="basic-addon1" />
                  </div>
                </Form.Group>
                <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Last Name</label>
                  <div className="input-group">
                    <Form.Control type="text" className="form-control" placeholder="Last Name" aria-label="LastName" aria-describedby="basic-addon1" />
                  </div>
                </Form.Group>
                <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Middle Name</label>
                  <div className="input-group">
                    <Form.Control type="text" className="form-control" placeholder="Middle Name" aria-label="MiddleName" aria-describedby="basic-addon1" />
                  </div>
                </Form.Group>
                <Form.Group>
                <label htmlFor="exampleFormControlSelect2">Email</label>
                  <div className="input-group">
                    <Form.Control type="email" className="form-control" placeholder='Email' />
                    {/* <div className="input-group-append">
                      <span className="input-group-text" type="email" placeholder='Email'>@digitalswitch.com</span>
                    </div> */}
                  </div>
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleFormControlSelect2">Select Gender</label>
                  <select className="form-control" id="exampleFormControlSelect2" >
                  <option>--Select Gender--</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleFormControlSelect2">Select Role</label>
                  <select className="form-control" id="exampleFormControlSelect2" >
                    <option>--Select Role--</option>
                    <option>Admin</option>
                    <option>Editor</option>
                  </select>
                </Form.Group>
                <Form.Group>
                  <label htmlFor="exampleFormControlSelect2">Employee ID.</label>
                  <div className="input-group">
                    <Form.Control type="text" className="form-control" placeholder="Employer ID." aria-label="Employer ID" aria-describedby="basic-addon1" />
                  </div>
                </Form.Group>
                <button className="btn btn-primary">Add</button>
              </div>
            </div>
          </div>
      </div>
    </div>
    )
  }
}

export default BasicElements
