import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.sass';
import Item from '../Item/index';
import StarRatings from 'react-star-ratings';
import {connect} from 'react-redux';
import {addItem} from '../../actions/cart/action';
import Axios from 'axios'
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';

const SweetAlert = withSwalInstance(swal);
class ItemPage extends Component {
  state = {
    show: false,
    product: {},
    similar: []
  }
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
    Axios.post('/api/singlebook', {id: this.props.match.params.id}).then((res) => {
      Axios.post('/api/bookincat', {id: res.data[0].id}).then((res => {this.setState({similar: res.data})}));
      this.setState({product: res.data[0]});
    });    
    if(!this.state.product) this.props.history.push('/error')
  }
  render() {
    return (
      <>
      <div className="itemPageWrapper">
        <div className="itemImgWrapper">
          <img src = {this.state.product.image}/>
        </div>
        <div className="itemInfoWrapper">
          <Link className="backLink" to="/">
            <span className="small">
              <svg fill="#000000" height="13" viewBox="0 0 18 15" width="13" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10l5 5 5-5z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </span>All Items
          </Link>
          <h3 className="itemName">{this.state.product.name}</h3>
          <p className="itemCost frm">{this.state.product.price}</p>
          <p className="description">
            {this.state.product.description}
          </p>
          <p className="seller frm">Category: <span>{this.state.product.category}</span></p>
          <p className="product-rating">
            <StarRatings
                rating={2.403}
                starDimension="20px"
                starSpacing="3px"
                numberOfStars={5}
                name='rating'
                starRatedColor="yellow"
              />
          </p>
          <button className="reqTradeBtn normalBtn" onClick = {() => {this.props.addItem(this.state.product); this.setState({show: true});}}>Add to cart</button>
        </div>
      </div>
      <h5>You might also like</h5>
      <div className="similar-products">
        {this.state.similar.map((product) =>  <Item key = {product.id} product = {product} />)}
      </div>
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

const mapDispatchToProps = {
  addItem
}

export default connect(null, mapDispatchToProps)(ItemPage);
