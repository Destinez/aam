import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import Spinner from '../app/shared/Spinner';


//Employee Pages
const AddEmployee = lazy(() => import('./employees/add-employee'));
const ManageEmployees = lazy(() => import('./employees/manage-employees'));
const EmployeeDetails = lazy(() => import('./employees/employee-details'));
const UpdateEmployee = lazy(() => import('./employees/update-employee'));
const InvitationLink = lazy(() => import('./employees/invitation-link'));




//Authentication Pages
const Login = lazy(() => import('./auth/Login'));
const Register = lazy(() => import('./auth/Register'));
const RegisterCustom = lazy(() => import('./auth/RegisterCustom'));
const ForgotPassword = lazy(() => import('./auth/ForgotPassword'));
const ResetPassword = lazy(() => import('./auth/ResetPassword'));
const ChangePassword = lazy(() => import('./auth/ChangePassword'));
const VerificationPending = lazy(() => import('./auth/VerificationPending'));
const Verification = lazy(() => import('./auth/Verification'));

//Fields
const Fields = lazy(() => import('./fields/Fields'));


const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));
const BasicTable = lazy(() => import('./tables/BasicTable'));
const Mdi = lazy(() => import('./icons/Mdi'));
const ChartJs = lazy(() => import('./charts/ChartJs'));
const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));
const Lockscreen = lazy(() => import('./auth/Lockscreen'));
const BlankPage = lazy(() => import('./general-pages/BlankPage'));




class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route path="/employees/add-employee" component={ AddEmployee } />
          <Route path="/employees/manage-employees" component={ ManageEmployees } />
          <Route path="/employees/employee-details/:employeeId" component={ EmployeeDetails } />
          <Route path="/employees/update-employee/:id" component={ UpdateEmployee } />
          <Route path="/employees/invitation-link" component={ InvitationLink } />


          <Route path="/login" component={ Login } />
          <Route path="/register/:token" component={ Register }  />
          <Route path="/register-custom/:token" component={ RegisterCustom } exact />
          <Route path="/forgot-password" component={ ForgotPassword } />
          <Route path="/reset-password" component={ ResetPassword } />
          <Route path="/change-password" component={ ChangePassword } />
          <Route path="/verification-pending" component={ VerificationPending } />
          <Route path="/verification" component={ Verification } />






          <Route path="/fields" component={ Fields } />





          <Route path="/user-pages/lockscreen" component={ Lockscreen } />
          <Route path="/error-404" component={ Error404 } />
          <Route path="/error-500" component={ Error500 } />
          <Route path="/general-pages/blank-page" component={ BlankPage } />
          
          <Route exact path="/dashboard" component={ Dashboard } />
          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />
          <Route path="/tables/basic-table" component={ BasicTable } />
          <Route path="/icons/mdi" component={ Mdi } />
          <Route path="/charts/chart-js" component={ ChartJs } />

          <Redirect to="/error-404" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;