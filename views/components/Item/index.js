import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {Icon} from "react-materialize";
import './styles.sass';

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
            <h4 id="product-description">{this.props.product.description}</h4>
          </div>
          <div className="price-add">
            <h5 id="product-price">${this.props.product.price}</h5>
            <Icon small onClick={() => this.addProduct(this.props.product)} id="add-icon">add-shopping-cart</Icon>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(Item);
