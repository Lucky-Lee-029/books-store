import React, { Component } from 'react';
import './styles.sass';
import Item from '../Item/index';
import SearchBar from './SearchBar';
import NavBar from '../Main/NavBar/index';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';
import Axios from 'axios';
import {withRouter} from 'react-router-dom'

const SweetAlert = withSwalInstance(swal);
class Homepage extends Component {
  state = {
    show: false,
    products: [],
    category: undefined,
    search: undefined
  }
  handleSubmitLink = (e) => {
    e.preventDefault();
    this.props.history.push('/search');
    Axios.post('/api/search', {name: e.target.elements.search.value}).then((res) => {
      this.setState({products: res.data, search: true});
    });
  }
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
    Axios.get('/api/books').then((res) => this.setState({products: res.data}));    
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if(!prevState.category)  return {category: 'stop'};
    else if(nextProps.match.params.id !== prevState.category && nextProps.match.params.id) {
      return {category: nextProps.match.params.id}
    }
    else if((prevState.category == 'stop' && !prevState.search) || (prevState.category == 'dup' && nextProps.match.params.id)) return {category: 'stop'};
    else if(nextProps.match.params.id == prevState.category) return {category: 'dup'}
    else return {category: null};
  }
  componentDidUpdate() {
      const {pathname} = this.props.location;
      if(!this.state.show && !pathname.includes('search') && this.state.category !== 'stop' && this.state.category !== 'dup') {
        if(this.state.category) Axios.post('/api/bookincat', {id: this.props.match.params.id}).then((res => {this.setState({products: res.data, search: false})}));
        else if(!this.props.match.params.id) Axios.get('/api/books').then((res) => this.setState({products: res.data, search: false}));
      }  
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
      <SweetAlert
        show={this.state.show}
        title="Success"
        text="Thêm hàng vào giỏ thành công"
        onConfirm={() => this.setState({ show: false })}
        />
      </>
    );
  }
}

export default withRouter(Homepage);
