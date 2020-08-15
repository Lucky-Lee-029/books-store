import React, { Component } from 'react';
import './styles.sass';
import SocialButton from './socialBtn';

class SignUp extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  render() {
    return (
      <div className="loginWrapper">
        <div className="mainSignup">
          <h3 className="loginHeading text-center">Sign up and join our store</h3>
          <form>
            <input name="username" placeholder="Nhập username của bạn vào đây"></input>
            <input name="password" placeholder="Nhập password của bạn vào đây"></input>
            <input name="name" placeholder="Nhập tên của bạn vào đây"></input>
            <div className = "btnWrapper">
              <button className="signupBtn realBtn">Sign Up</button>
            </div>
          </form>
        </div>
        <SocialButton/>
      </div>
    );
  }
}

export default SignUp;
