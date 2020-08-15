import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles.sass';
import {deleteAuth} from '../../actions/auth/action'


class Header extends Component {
  state = {};
  componentWillMount() {
    this.previousWidth = 0;
    this.menuButton = (
      <button className="menuBtn"
        onClick={
          () => {
            document.querySelector(".menu").classList.toggle("open");
          }
        }
      >
        MENU
      </button>
    );
    this.setMenuState(window.innerWidth);
    this.previousWidth = window.innerWidth;
  }
  loggedInMenu = (
    <div className="menu">
      <Link onlyActiveOnIndex={true} key={1} to="/" activeClassName="activeNavLink" className="navLink">
        Home
      </Link>
      <Link onlyActiveOnIndex={true} key={2} to="/profile" activeClassName="activeNavLink" className="navLink">
        Profile
      </Link>
      <Link onlyActiveOnIndex={true} key={3} to="/cart" activeClassName="activeNavLink" className="navLink">
        My Cart
      </Link>
      <Link onlyActiveOnIndex={true} key={4} to="/orders" activeClassName="activeNavLink" className="navLink">
        My Orders
      </Link>
      <Link onlyActiveOnIndex={true} key={5} to="/login" activeClassName="activeNavLink" className="navLink" onClick = {() => this.handleLogout()}>
        Logout
      </Link>
    </div>
  );
  loggedOutMenu = (
    <div className="menu loginMenu">
      <Link onlyActiveOnIndex={true} key={6} to="/signup" activeClassName="activeNavLink" className="navLink">
        Sign Up
      </Link>
      <Link onlyActiveOnIndex={true} key={7} to="/login" activeClassName="activeNavLink" className="navLink">
        Login
      </Link>
    </div>
  );
  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setMenuState(window.innerWidth);
    });
  }
  handleLogout = () => {
    this.props.deleteAuth();
  }
  setMenuState(width) {
    if (this.previousWidth !== width) {
      if (width > 768) {
        const menu = document.querySelector('div.menu');
        if(menu) {
          menu.classList.remove("open");
        }
        this.setState({menuActive: false});
      } else {
        this.setState({menuActive: true});
      }
      this.previousWidth = width;
    }
  }

  render() {
    return (
      <header className="header">
          <h1>
            <Link onlyActiveOnIndex={true} to="/" className="logo">
              BookStore
            </Link>
          </h1>
          {this.state.menuActive ? this.menuButton: ""}
          {this.props.auth  ? this.loggedInMenu : this.loggedOutMenu}
      </header>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth.accessToken
  };
};
const mapDispatchToProps = {
  deleteAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
