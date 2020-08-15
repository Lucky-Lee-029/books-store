import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.sass';
import PRODUCTS from '../Data/index';
import Item from '../Item/index';
import StarRatings from 'react-star-ratings';
import {connect} from 'react-redux';
import {addItem} from '../../actions/cart/action'
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';

const SweetAlert = withSwalInstance(swal);
class ItemPage extends Component {
  state = {
    show: false
  }
  product = PRODUCTS.filter((item) => item.id == this.props.match.params.id)[0];
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open')
    if(!this.product) this.props.history.push('/error')
  }
  render() {
    return (
      <>
      <div className="itemPageWrapper">
        <div className="itemImgWrapper">
          <img src = {this.product.img}/>
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
          <h3 className="itemName">{this.product.name}</h3>
          <p className="itemCost frm">{this.product.price}</p>
          <p className="description">
            {this.product.description}
          </p>
          <p className="seller frm">Category: <span>{this.product.category}</span></p>
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
          <button className="reqTradeBtn normalBtn" onClick = {() => {this.props.addItem(this.product); this.setState({show: true});}}>Add to cart</button>
        </div>
      </div>
      <h5>You might also like</h5>
      <div className="similar-products">
        {PRODUCTS.map((product) => {
          if (
            product.category === this.product.category
            && product.name !== this.product.name) {
            return <Item key = {product.id} product = {product} />
          }
        })}
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
