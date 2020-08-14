import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App/index';
import Main from '../components/Main/index';
import ErrorPage from '../components/ErrorPage/index';
import MyItems from '../components/MyItems/index'
export default (
  <BrowserRouter>
    <App>
      <Switch>
        <Route path = '/' component = {Main} exact/>
        <Route path="/cart" component={MyItems} />
        <Route component={ErrorPage} />
      </Switch>
    </App>
  </BrowserRouter>
);
