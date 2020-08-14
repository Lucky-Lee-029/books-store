import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App/index';
import Main from '../components/Main/index';
import Profile from '../components/Profile/index';
import ErrorPage from '../components/ErrorPage/index';
import ItemPage from '../components/ItemPage/index';
import Login from '../components/Join/login';
import SignUp from '../components/Join/signUp';
import Orders from '../components/Orders/index';
import MyItems from '../components/MyItems/index'

export default (
  <BrowserRouter>
    <App>
      <Switch>
        <Route path = '/' component = {Main} exact/>
        <Route path="/item/:id" component={ItemPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/cart" component={MyItems} />
        <Route path = '/profile' component = {Profile}/>
        <Route path="/orders" component={Orders} />
        <Route component={ErrorPage} />
      </Switch>
    </App>
  </BrowserRouter>
);
