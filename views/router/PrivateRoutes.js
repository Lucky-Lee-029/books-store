import React, {useContext, useEffect} from 'react';
import { Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthContext, checkAuth } from '../context/auth';

import Main from '../components/Main/index';
import Profile from '../components/Profile/index';
import ErrorPage from '../components/ErrorPage/index';
import ItemPage from '../components/ItemPage/index';
import Login from '../components/Join/login';
import SignUp from '../components/Join/signUp';
import Orders from '../components/Orders/index';
import MyItems from '../components/MyItems/index'

const ProtectedRoute = ({ component: Component, roleType, ...rest })=> { 
    const authorization = useContext(AuthContext);
    const [hasRequiredRole] = checkAuth({authorization, roleType});
    return (
        <Route
        {...rest}
        render={props => hasRequiredRole ? 
        <Component {...props} /> :
        <Unauthorized {...props} />  } 
        />
    );
}; 

const PrivateRoutes = props => {
  if (props.authData.accessToken) {
    return (
      <>
            <Route path="/" component={Main}  exact/>
            <Route path="/item/:id" component={ItemPage} />
            <Route path="/login" component={Login} />
            <Route path="/cart" component={MyItems} />
            <Route path = '/profile' component = {Profile}/>
            <Route path="/orders" component={Orders} />
            {/*<ProtectedRoute exact path="/admin" component={<p>admin</p>} roleType="admin"/>*/}
            <Route path="/404" component={ErrorPage} />
            {/*<Route path="*" render={() => <Redirect to="/404" />} />*/}
      </>
    );
  } else {
    return (
      <>
        <Route path = '/' component = {Main} exact/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/404" component={ErrorPage} />
        <Route path="*" render={() => <Redirect to="/404" />} />
      </>
    );
  }
};


const mapStateToProps = state => {
  return {
    authData: state.auth
  };
};

export default connect(mapStateToProps)(PrivateRoutes);