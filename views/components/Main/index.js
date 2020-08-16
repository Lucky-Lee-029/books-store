import React, { Component } from 'react';
import './styles.sass';
import Item from '../Item/index';
import SearchBar from './SearchBar';
import NavBar from '../Main/NavBar/index';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';
import Axios from 'axios';

const SweetAlert = withSwalInstance(swal);
class Homepage extends Component {
  state = {
    show: false,
    products: []
  }
  handleSubmitLink = (e) => {
    e.preventDefault();
    Axios.post('/api/search', {name: e.target.elements.search.value}).then((res) => {this.setState({products: res.data})});
  } 
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
    Axios.get('/api/books').then((res) => {this.setState({products: res.data})});    
  } 
  render() {
    return (
      <>
      <NavBar/>
      <SearchBar handleSubmitLink = {this.handleSubmitLink}/>
      <main className="main">
        <div className = "items">
          {this.state.products.map((data, i) => <Item key={i} product = {data} addSuccess = {() => this.setState({show:true})} />)}
        </div>
      </main>
      </>
    );
  }
}

export default Homepage;
