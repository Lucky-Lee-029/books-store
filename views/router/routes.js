import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App/index';
import Main from '../components/Main/index';
import Profile from '../components/Profile/index';
import ErrorPage from '../components/ErrorPage/index';
import Orders from '../components/Orders/index';

export default (
  <BrowserRouter>
    <App>
      <Switch>
        <Route path = '/' component = {Main} exact/>
        <Route path = '/profile' component = {Profile}/>
        <Route path="/orders" component={Orders} />
        <Route component={ErrorPage} />
      </Switch>
    </App>
  </BrowserRouter>
);
