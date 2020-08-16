import React, { Component } from 'react';
import './styles.sass';
import SocialButton from './socialBtn';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';
import { flatMap } from 'lodash';

const SweetAlert = withSwalInstance(swal);
class SignUp extends Component {
  state = {
    show: false
  }
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  handleSubmitSignup = async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    if(username && password && name && email && phone) {
      Axios.post('/api/newaccount', {username: username, password: password, name: name, email: email, phone: phone}).then((res) => {
        this.setState({show:true})
        this.props.history.push('/login');
      });  
    }  
  }
  render() {
    return (
      <div className="loginWrapper">
        <div className="mainSignup">
          <h3 className="loginHeading text-center">Sign up and join our store</h3>
          <form onSubmit = {this.handleSubmitSignup}>
            <input name="username" placeholder="Nhập username của bạn vào đây" required></input>
            <input name="password" placeholder="Nhập password của bạn vào đây" required></input>
            <input name="name" placeholder="Nhập tên của bạn vào đây" required></input>
            <input name="email" placeholder="Nhập email của bạn vào đây" required></input>
            <input name="phone" placeholder="Nhập phone của bạn vào đây" required></input>
            <div className = "btnWrapper">
              <button type = "submit" className="signupBtn realBtn">Sign Up</button>
            </div>
          </form>
        </div>
        <SocialButton/>
        <SweetAlert
        show={this.state.show}
        title="Success"
        text="Tạo tài khoản thành công!"
        onConfirm={() => this.setState({ show: false })}
        />
      </div>
    );
  }
}

export default withRouter(SignUp);
