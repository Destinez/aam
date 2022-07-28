import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import Spinner from '../app/shared/Spinner';


const Dashboard = lazy(() => import('./dashboard/Dashboard'));



const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));


//Employee Pages
const AddEmployee = lazy(() => import('./employees/add-employee'));
const ManageEmployees = lazy(() => import('./employees/manage-employees'));



const BasicTable = lazy(() => import('./tables/BasicTable'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));



//Authentication Pages
const Login = lazy(() => import('./auth/Login'));
const Register = lazy(() => import('./auth/Register'));
const RegisterCustom = lazy(() => import('./auth/RegisterCustom'));
const ForgotPassword = lazy(() => import('./auth/ForgotPassword'));
const ResetPassword = lazy(() => import('./auth/ResetPassword'));
const ChangePassword = lazy(() => import('./auth/ChangePassword'));
const VerificationPending = lazy(() => import('./auth/VerificationPending'));
const Verification = lazy(() => import('./auth/Verification'));



const Lockscreen = lazy(() => import('./auth/Lockscreen'));
const BlankPage = lazy(() => import('./general-pages/BlankPage'));




class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />


          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />


          <Route path="/employees/add-employee" component={ AddEmployee } />
          <Route path="/employees/manage-employees" component={ ManageEmployees } />

          <Route path="/tables/basic-table" component={ BasicTable } />


          <Route path="/icons/mdi" component={ Mdi } />


          <Route path="/charts/chart-js" component={ ChartJs } />


          <Route path="/auth/login" component={ Login } />
          <Route path="/auth/register/:token" component={ Register }  >

          </Route>
          <Route path="/auth/register-custom/:token" component={ RegisterCustom } exact />
          <Route path="/auth/forgot-password" component={ ForgotPassword } />
          <Route path="/reset-password" component={ ResetPassword } />
          <Route path="/auth/change-password" component={ ChangePassword } />
          <Route path="/auth/verification-pending" component={ VerificationPending } />
          <Route path="/verification" component={ Verification } />

          <Route path="/user-pages/lockscreen" component={ Lockscreen } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />

          <Route path="/general-pages/blank-page" component={ BlankPage } />


          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;