import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';

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
          
          
          <li className={ this.isPathActive('/form-elements') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.employeesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('employeesMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Employees</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
            </div>
            <Collapse in={ this.state.employeesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/employees/add-employee') ? 'nav-link active' : 'nav-link' } to="/employees/add-employee"><Trans>Add Employee</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/employees/manage-employees') ? 'nav-link active' : 'nav-link' } to="/employees/manage-employees"><Trans>Manage Employees</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/employees/employee-details') ? 'nav-link active' : 'nav-link' } to="/employees/employee-details"><Trans>Employee Details</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/employees/invitation-link') ? 'nav-link active' : 'nav-link' } to="/employees/invitation-link"><Trans>Generate Invitational Link</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/auth') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('userPagesMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>Authentication Pages</Trans></span>
              <i className="menu-arrow"></i>
              <i className="mdi mdi-lock menu-icon"></i>
            </div>
            <Collapse in={ this.state.userPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/login') ? 'nav-link active' : 'nav-link' } to="/login"><Trans>Login</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/register') ? 'nav-link active' : 'nav-link' } to="/register/"><Trans>Register</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/register-custom') ? 'nav-link active' : 'nav-link' } to="/register-custom"><Trans>Register Custom</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/forgot-password') ? 'nav-link active' : 'nav-link' } to="/forgot-password"><Trans>Forgot Password</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/reset-password') ? 'nav-link active' : 'nav-link' } to="/reset-password"><Trans>Reset Password</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/verification-success') ? 'nav-link active' : 'nav-link' } to="/verification-success"><Trans>Verification Success</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/lockscreen') ? 'nav-link active' : 'nav-link' } to="/lockscreen"><Trans>Lockscreen</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
         
          <li className={ this.isPathActive('/general-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.generalPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('generalPagesMenuOpen') } data-toggle="collapse">
              <span className="menu-title"><Trans>General Pages</Trans></span>
              
              <i className="menu-arrow"></i>
              <i className="mdi mdi-medical-bag menu-icon"></i>
            </div>
            <Collapse in={ this.state.generalPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/general-pages/blank-page') ? 'nav-link active' : 'nav-link' } to="/general-pages/blank-page"><Trans>Blank Page</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link' } to="/basic-ui/buttons"><Trans>Buttons</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link' } to="/basic-ui/dropdowns"><Trans>Dropdowns</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/typography') ? 'nav-link active' : 'nav-link' } to="/basic-ui/typography"><Trans>Typography</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/tables/basic-table') ? 'nav-link active' : 'nav-link' } to="/tables/basic-table"><Trans>Basic Table</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/icons/mdi') ? 'nav-link active' : 'nav-link' } to="/icons/mdi"><Trans>Material</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/charts/chart-js') ? 'nav-link active' : 'nav-link' } to="/charts/chart-js"><Trans>Chart Js</Trans></Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/error-pages/error-404') ? 'nav-link active' : 'nav-link' } to="/error-pages/error-404">404</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/error-pages/error-500') ? 'nav-link active' : 'nav-link' } to="/error-pages/error-500">500</Link></li>
                <li className="nav-item"> <Link className="nav-link" to="/dashboard">
              <span className="menu-title"><Trans>Dashboard</Trans></span>
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