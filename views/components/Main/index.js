import React, { Component } from 'react';
import './styles.sass';
import Item from '../Item/index';
import SearchBar from './SearchBar';
import PRODUCT from '../Data/index';
import NavBar from '../Main/NavBar/index';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';

const SweetAlert = withSwalInstance(swal);
class Homepage extends Component {
  state = {
    show: false
  }
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
          {PRODUCT.map((data, i) => <Item key={i} product = {data} addSuccess = {() => this.setState({show:true})} />)}
        </div>
      </main>
      <SweetAlert
        show={this.state.show}
        title="Success"
        text="Thêm sản phẩm vào giỏ thành công"
        onConfirm={() => this.setState({ show: false })}
      />
      </>
    );
  }
}

export default Homepage;
