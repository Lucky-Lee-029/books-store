import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App/index';
import Main from '../components/Main/index';
import ErrorPage from '../components/ErrorPage/index';
import ItemPage from '../components/ItemPage/index';
import Login from '../components/Join/login';
import SignUp from '../components/Join/signUp';

export default (
  <BrowserRouter>
    <App>
      <Switch>
        <Route path = '/' component = {Main} exact/>
        <Route path="/item/:id" component={ItemPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route component={ErrorPage} />
      </Switch>
    </App>
  </BrowserRouter>
);
