// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
// Internals
import './styles.sass';


const Navbar = () => (
  <nav className="navbar">
      <ul>
        <li><NavLink activeClassName="selected" className="nav-link" to="/book1">Self-help</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/book2">Sách ngoại văn</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/book3">Sách thiếu nhi</NavLink></li>
      </ul>
    <div className="shopping-cart">
      <NavLink className ="link" to="/cart">Giỏ hàng</NavLink>
    </div>
  </nav>
);

export default Navbar;
