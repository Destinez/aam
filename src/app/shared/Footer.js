import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between py-2">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <a href="https://www.digitalswitch.net" target="_blank" rel="noopener noreferrer">Digital Switch </a>2022</span>
         
        </div>
      </footer> 
    );
  }
}

export default Footer;