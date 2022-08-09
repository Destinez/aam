import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import setAuthToken from '../validation/authAuthToken'
const axios = require('axios').default;

function InvitationLink(){

  const [copy, setCopy] = useState("")
  const [email, setEmail] = useState("")
  const [type, setType] = useState("1")
  const [link, setLink] = useState("")
  const [error, setError] = useState("")
  const [errorClass, setErrorClass] = useState("")

  useEffect(() => {
    let token = localStorage.getItem("token");
    setAuthToken(token);

  }, []);


  let handleTypeChange = (e) => {

    const { name, value } = e.target;
    console.log(name, value)

    setType(value)
    console.log(type)


  }


  const handleCopy = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(link)
  } 



  let generateLink = (e) => {

    let token = localStorage.getItem("token");
    setAuthToken(token);
    e.preventDefault()

    let data = {
      type: type
    }


    axios({
      method: 'post',
      url: `http://${process.env.REACT_APP_SERVER_URL}/api/generate-invitation-link`,
      data: data,
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
          setError(res.message)
          setLink(res.data)
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
                <div className="invitation-link">
                  <div className='d-flex'>
                    <input defaultChecked type="radio" className=""  onChange={handleTypeChange} name='type' value="1" />Allow any Email 
                  </div>
                  <div className='d-flex'>
                    <input type="radio" className=""   onChange={handleTypeChange} name='type' value="0" />Allow Emails with only this Domain
                  </div>  
                </div>
                <div className="">
                <Form.Group>
                    <div className="input-group">
                      
                      <div className={`input-group-append ${type === "1" ? "d-none" : "null"}`}>
                        <span className="input-group-text text-dark">@digitalswitch.com</span>
                      </div>
                    </div>
                  </Form.Group> 
                </div>
                
                <button onClick={generateLink} className="btn btn-primary"><i className="mdi mdi-link"></i> Generate Link</button>
                <div className='jumbotron mt-3'>
                  <div className='message-info p-2'>
                      <h6 className={ errorClass }>
                        { error }
                      </h6>
                      <p className='text-info'>
                        <i>{link}</i> 
                        <button onClick={(e) => handleCopy(e)} className={`btn btn-secondary ${link ? "d-block" : "d-none"}`}>Copy</button>
                      </p>
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>
      </div>
    </div>
    )
  }

export default InvitationLink
