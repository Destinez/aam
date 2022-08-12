import React, { Component, useEffect, useState } from 'react'
import { ProgressBar, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import MUIDataTable from "mui-datatables";
import setAuthToken from '../validation/authAuthToken'
import { Text, Boolean, RadioBox, RadioGroup, Date, Number, CheckBoxGroup, File, TextField } from './InputFields/InputFields'
const axios = require('axios').default;



function Fields(){

    const [fieldName, setFieldName] = useState("")
    const [fieldType, setFieldType] = useState("")
    const [defaultValue, setDefaultValue] = useState("")
    const [readOnly, setReadOnly] = useState("")

    const [field, setField] = useState([])

    const [message, setMessage] = useState("");
    const [errorClass, setErrorClass] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        

    useEffect(() => {
        
    }, []);


    let handleFieldType = (e) => {
      setFieldType(e.target.value)

      const { name, value } = e.target;
      console.log(name, value)
      

      if(value == "text"){

      }
      else  if(value == "boolean"){

      }
      
      else  if(value == "number"){

      }
      
      else  if(value == "date"){

      }
      
      else  if(value == "textfield"){

      }
      else  if(value == "radio_group"){

      }
      else  if(value == "check_box_group"){

      }
      else  if(value == "radio_box"){

      }
      else  if(value == "file"){

      }
      
    }

    
    let handleView = (id, e) => {
        e.preventDefault()
        window.location.href = `/fields/field-details/${id}`
    }

    let handleEdit = (id, e) => {
        e.preventDefault()
        window.location.href = `/fields/update-field/${id}`
    }

    let handleDelete = (id, e) => {
        e.preventDefault()
    }

        
    return (
        <div>
            <div className="page-header">
            <Link onClick={handleShow} to="#" className="page-action text-success">
              <i className="mdi mdi-plus-circle "></i>
              New Field
            </Link>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>
                  Fields</a></li>
                <li className="breadcrumb-item active" aria-current="page">Manage fields</li>
                </ol>
            </nav>
            </div>
    
            <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                <div className="card-body">
                    <h4 className="card-title">All fields</h4>
                    <div className='d-flex justify-content-center'>
                    <div className='message-info'>
                        <h6 className={ errorClass }>
                        
                        { message }
                        </h6>
                    </div>
                </div>
                    <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Fieldtype</th>
                            <th>Default</th>
                            <th>Read-Only</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td>1</td>
                              <td>File</td>
                              <td>Text</td>
                              <td>-</td>
                              <td>
                                <input type="radio" checked readOnly></input>
                              </td>
                              <td>
                                <Link to="#" onClick={handleShow} className='delete-button'>
                                    <i className="mdi mdi-delete-outline text-danger"></i>
                                </Link>
                                <Link to="#" onClick={handleShow} className='edit-button'>
                                <i className="mdi mdi-pen text-info"></i>
                                </Link>
                              
                              </td>
                            </tr>
                        </tbody>
                    </table>
                    <Text />
                    <TextField />
                    </div>
{/* 
 <MUIDataTable
  title={"field List"}
  data={fields}
  columns={columns}
  options={options}
/>  */}
                </div>
                </div>
            </div>
            
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span className='text-danger'>
                            This action cannot be reversed!
                        </span> 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to Delete Field?
                </Modal.Body>
                <Modal.Footer>
                <button className="btn btn-secondary" onClick={handleClose}>
                    Cancel
                </button>
                <button className="btn btn-danger" onClick={handleClose}>
                    Delete
                </button>
                </Modal.Footer>
            </Modal>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <span className='text-info'>
                            Add Field
                        </span> 
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <Form.Group>
                    <label htmlFor="exampleFormControlSelect2">Name</label>
                    <div className="input-group">
                      <Form.Control type="text" className="form-control" placeholder="Field Name" aria-label="Name" aria-describedby="basic-addon1" onChange={e => setFieldName(e.target.value)} />
                    </div>
                  </Form.Group>

                  <Form.Group>
                    <label htmlFor="exampleFormControlSelect2">Field Type</label>
                    <div className="input-group">
                      <select className="form-control" onChange={ e => handleFieldType(e) }>
                        <option value="text">Text</option>
                        <option value="boolean">True/False</option>
                        <option value="number">Number</option>
                        <option value="date">Date</option>
                        <option value="textfield">TextField</option>
                        <option value="radio_group">RadioGroup</option>
                        <option value="check_box_group">CheckboxGroup</option>
                        <option value="radio_box">Radiobox</option>
                        <option value="file">File</option>
                      </select>
                    </div>
                  </Form.Group>

                  { fieldType === "text" && <Text /> }
                  { fieldType === "boolean" && <Boolean /> }
                  { fieldType === "number" && <Number /> }
                  { fieldType === "date" && <Date /> }
                  { fieldType === "textfield" && <TextField /> }
                  { fieldType === "radio_group" && <RadioGroup /> }
                  { fieldType === "radio_box" && <RadioBox /> }
                  { fieldType === "file" && <File /> }
                  { fieldType === "check_box_group" && <CheckBoxGroup /> }

                  <Form.Group>
                    <label htmlFor="exampleFormControlSelect2">Read Only</label>
                    <div className="input-group">
                      <input type="checkbox" onChange={e => setReadOnly(e.target.value)} />
                    </div>
                  </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                <button className="btn btn-secondary" onClick={handleClose}>
                    Cancel
                </button>
                <button className="btn btn-success" onClick={handleClose}>
                    Update
                </button>
                </Modal.Footer>
            </Modal>
            </div>
        
        )   
  }
  


export default Fields
