import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const axios = require('axios').default;


function Verification () {

    let search = window.location.search;
    let params = new URLSearchParams(search);
    let token_temp = params.get('token');

    let token = {
      token: token_temp
    }
    
    axios({
      method: 'post',
      url: `http://${process.env.REACT_APP_SERVER_URL}/api/verification?token=${token}`,
      data: token,
      headers: {
        'Content-Type': 'application/json',
      }
    })
    
    .then(function (response) {
      console.log(response.data)

      let res = response.data

      if (res.status === false && res.code === 423) {
        setMessage(res.message)
        setErrorClass('text-danger')
      }
      else if (res.status === false && res.code === 422) {
        setMessage(res.message)
        setErrorClass('text-danger')
      }
      
      else if (res.status === false && res.code === 403) {
        setMessage(res.message)
        setErrorClass('text-danger')
      }
      else if (res.status === true && res.code === 200) {
        setMessage(res.message)
        setErrorClass('text-success')
      }
      else{
        console.log(res)
      }
    })

    .catch(function (error) {
      console.log(error);
    })



    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className='container'>
                <div className='d-flex justify-content-center'>
                  <div className='message-info'>
                    <h1 className='text-warning text-center'>Congratulations!</h1>
                    <h6 className={ errorClass }>
                      
                    { message }
                    </h6>
                  </div>
                </div>
                <button className='btn btn-primary w-100' onClick={handleClick} >Go To Login</button>
              </div>
              
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
}

export default Verification
