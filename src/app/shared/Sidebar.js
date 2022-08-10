import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/advanced-ui', state: 'advancedUiMenuOpen'},
      {path:'/employees', state: 'employeesMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/maps', state: 'mapsMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/auth', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
      {path:'/general-pages', state: 'generalPagesMenuOpen'},
      {path:'/ecommerce', state: 'ecommercePagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  }

  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          
          <li className="nav-item"> <Link className={ this.isPathActive('/fields') ? 'nav-link active' : 'nav-link' } to="/fields">Fields</Link></li>
          <li className={ this.isPathActive('/form-elements') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.employeesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('employeesMenuOpen') } data-toggle="collapse">
              <span className="menu-title">Employees</span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
            </div>
            <Collapse in={ this.state.employeesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/employees/add-employee') ? 'nav-link active' : 'nav-link' } to="/employees/add-employee">Add Employee</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/employees/manage-employees') ? 'nav-link active' : 'nav-link' } to="/employees/manage-employees">Manage Employees</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/employees/employee-details') ? 'nav-link active' : 'nav-link' } to="/employees/employee-details">Employee Details</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/employees/invitation-link') ? 'nav-link active' : 'nav-link' } to="/employees/invitation-link">Generate Invitational Link</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/auth') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('userPagesMenuOpen') } data-toggle="collapse">
              <span className="menu-title">Authentication Pages</span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-lock menu-icon"></i>
            </div>
            <Collapse in={ this.state.userPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/login') ? 'nav-link active' : 'nav-link' } to="/login">Login</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/register') ? 'nav-link active' : 'nav-link' } to="/register/">Register</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/register-custom') ? 'nav-link active' : 'nav-link' } to="/register-custom">Register Custom</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/forgot-password') ? 'nav-link active' : 'nav-link' } to="/forgot-password">Forgot Password</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/reset-password') ? 'nav-link active' : 'nav-link' } to="/reset-password">Reset Password</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/verification-success') ? 'nav-link active' : 'nav-link' } to="/verification-success">Verification Success</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/lockscreen') ? 'nav-link active' : 'nav-link' } to="/lockscreen">Lockscreen</Link></li>
              </ul>
            </Collapse>
          </li>
         
          <li className={ this.isPathActive('/general-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.generalPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('generalPagesMenuOpen') } data-toggle="collapse">
              <span className="menu-title">General Pages</span>
              
              <i className="menu-arrow"></i>
              <i className="mdi mdi-medical-bag menu-icon"></i>
            </div>
            <Collapse in={ this.state.generalPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/blank-page') ? 'nav-link active' : 'nav-link' } to="/general-pages/blank-page">Blank Page</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link' } to="/basic-ui/buttons">Buttons</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link' } to="/basic-ui/dropdowns">Dropdowns</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/typography') ? 'nav-link active' : 'nav-link' } to="/basic-ui/typography">Typography</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/tables/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table">Basic Table</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/icons/mdi') ? 'nav-link active' : 'nav-link' } to="/icons/mdi">Material</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/charts/chart-js') ? 'nav-link active' : 'nav-link' } to="/charts/chart-js">Chart Js</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/error-pages/error-404') ? 'nav-link active' : 'nav-link' } to="/error-pages/error-404">404</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/error-pages/error-500') ? 'nav-link active' : 'nav-link' } to="/error-pages/error-500">500</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/dashboard">
              <span className="menu-title">Dashboard</span>
              <i className="mdi mdi-home menu-icon"></i>
            </Link></li>
              </ul>
            </Collapse>
          </li>
         
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);