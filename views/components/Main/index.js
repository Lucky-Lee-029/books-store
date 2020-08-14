import React, { Component } from 'react';
import './styles.sass';
import Item from '../Item/index';
import SearchBar from './SearchBar';
import PRODUCT from '../Data/index';
import NavBar from '../Main/NavBar/index';
class Homepage extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  handleSubmitLink = () => {

  }
  render() {
    return (
      <>
      <NavBar/>
      <SearchBar/>
      <main className="main">
        <div className = "items">
          {PRODUCT.map((data, i) => <Item key={i} product = {data} />)}
        </div>
      </main>
      </>
    );
  }
}

export default Homepage;
