// Dependencies
import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Axios from 'axios'
// Internals
import './styles.sass';


const Navbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    Axios.get('/api/allcat').then((res) => setCategories(res.data));
  },[])
  return (
    <nav className="navbar">
      <ul>
        {categories.map((data) => <li><NavLink activeClassName="selected" className="nav-link" to={`/${data.id}`}>{data.name}</NavLink></li>)}
      </ul>
    </nav>
  )
}



export default Navbar;
