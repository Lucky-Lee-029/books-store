import React, { Component } from 'react';
import './styles.sass';
import Item from '../Item/index';
import SearchBar from './SearchBar'
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
      <SearchBar/>
      <main className="main">
        {"1234567890".split("").map((e, i) => <Item key={i} />)}
      </main>
      </>
    );
  }
}

export default Homepage;
