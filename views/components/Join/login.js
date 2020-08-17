import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import './styles.sass';
import SocialButton from './socialBtn';
import {setAuth} from '../../actions/auth/action'
import Axios from 'axios';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';
import jwt from 'jwt-simple'
const SweetAlert = withSwalInstance(swal);
class Login extends Component {
  state = {
    show: false
  }
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  handleSubmitLogin = async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    Axios.post('/api/auth', {username: username, password: password}).then((res) => {
      const auth = res.data;
      const data = jwt.decode(auth,'xxx');
      if(data.role === 2)  window.location.assign('/admin');
      else {
        if(auth) {this.props.setAuth(auth); this.props.history.push('/')}
        else this.setState({show: true});
      }
    });    
  }
  render() {
    return (
      <div className="loginWrapper">
        <div className="mainLogin">
          <h3 className="loginHeading text-center">Login with your account</h3>
          <form onSubmit = {this.handleSubmitLogin}>
            <input name="username" placeholder="Nhập username của bạn vào đây" required></input>
            <input name="password" placeholder="Nhập password của bạn vào đây" required></input>
            <div className = "btnWrapper">
              <button type = "submit" className="loginBtn realBtn">Login</button>
            </div>
          </form>
        </div>
        <SocialButton/>
        <SweetAlert
        show={this.state.show}
        title="Failed"
        text="Sai tài khoản hoặc mật khẩu"
        onConfirm={() => this.setState({ show: false })}
        />
      </div>
    );
  }
}
const mapDispatchToProps = {
  setAuth
}

export default connect(null, mapDispatchToProps)(withRouter(Login));
