import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import jwt from 'jwt-simple';
import {connect} from 'react-redux';
import './styles.sass';
import SocialButton from './socialBtn';
import {setAuth} from '../../actions/auth/action'

class Login extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  handleSumbitLogin = async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const auth = jwt.encode({role: 1},'xxx');
    if(auth) {this.props.setAuth(auth); this.props.history.push('/');}
  }
  render() {
    return (
      <div className="loginWrapper">
        <div className="mainLogin">
          <h3 className="loginHeading text-center">Login with your account</h3>
          <form onSubmit = {this.handleSumbitLogin}>
            <input name="username" placeholder="Nhập username của bạn vào đây"></input>
            <input name="password" placeholder="Nhập password của bạn vào đây"></input>
            <div className = "btnWrapper">
              <button className="loginBtn realBtn">Login</button>
            </div>
          </form>
        </div>
        <SocialButton/>
      </div>
    );
  }
}
const mapDispatchToProps = {
  setAuth
}

export default connect(null, mapDispatchToProps)(withRouter(Login));
