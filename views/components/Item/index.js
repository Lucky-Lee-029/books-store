import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './styles.sass';
import StarRatings from 'react-star-ratings';
import {connect} from 'react-redux';
import {addItem} from '../../actions/cart/action';

class Item extends Component {
  addProduct = (product) => {
    this.props.addItem(product);
    this.props.addSuccess();
  }
  render() {
    return(
      <div className="item-hand">
        <div className="content" onClick={(e)=> {
          this.props.history.push(`/item/${this.props.product.id}`);
        }}>
          <div className="product-img">
            <img alt={this.props.product.name} src={this.props.product.image} />
          </div>
          <div className="product-details">
            <h1 id="product-name">{this.props.product.name}</h1>
          </div>
          <div className="price-add">
            <h5 id="product-price">${this.props.product.price}</h5>
            <i className="material-icons small" googl="true" onClick = {(e) => {
              e.stopPropagation();
              this.addProduct(this.props.product);
            }}
            >add-shopping-cart</i>          
          </div>
          <div className="product-rating">
            <StarRatings
              rating={2.403}
              starDimension="20px"
              starSpacing="3px"
              numberOfStars={5}
              name='rating'
              starRatedColor="yellow"
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
   addItem
}

export default connect(null, mapDispatchToProps)(withRouter(Item));
