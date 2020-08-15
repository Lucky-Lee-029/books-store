import React, { Component } from 'react';
import './styles.sass';
import SocialButton from './socialBtn';

class Login extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  render() {
    return (
      <div className="loginWrapper">
        <div className="mainLogin">
          <h3 className="loginHeading text-center">Login with your account</h3>
          <form>
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

export default Login;
