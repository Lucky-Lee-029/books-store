import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {Icon} from "react-materialize";
import './styles.sass';
import StarRatings from 'react-star-ratings';

class Item extends Component {
  render() {
    return(
      <div className="item-hand">
        <div className="content" onClick={()=> {
          this.props.history.push(`/item/${this.props.product.id}`);
        }}>
          <div className="product-img">
            <img alt={this.props.product.name} src={this.props.product.img} />
          </div>
          <div className="product-details">
            <h1 id="product-name">{this.props.product.name}</h1>
          </div>
          <div className="price-add">
            <h5 id="product-price">${this.props.product.price}</h5>
            <Icon small onClick={() => this.addProduct(this.props.product)} id="add-icon">add-shopping-cart</Icon>
          </div>
          <div className="product-rating">
            {/* <StarRatings
              rating={2}
              starRatedColor="yellow"
              //changeRating={this.changeRating}
              numberOfStars={5}
              name='rating'
            /> */}
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


export default withRouter(Item);
