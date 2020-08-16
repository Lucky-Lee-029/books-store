import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import UserItem from '../UserItem/index';
import {connect} from 'react-redux'
import PurchasePanel from './panel';
import './styles.sass';
import { data } from 'autoprefixer';

class MyItems extends Component {

  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }

  render() {
    return (
      <div className="myItemsWrapper">
        <div className="backWrapper">
          <button
            onClick={() => {
              this.props.history.push('/');
            }}
            className="viewBtn viewItemBtn">
            + View more item
          </button>
        </div>
        {!!this.props.products.length ? 
        <div className = "myCart">
          <div className = "productList">
            {this.props.products.map((data, i) => <UserItem key={i} product = {data}/>)}
          </div>
          <PurchasePanel total = {Math.round(this.props.products.reduce((total, current) => total + current.price,0)* 100) / 100} 
                         list = {this.props.products.map((data) => data.id)} />
        </div>
        : <h3>Hiện chưa thêm sản phẩm nào vào giỏ hàng</h3>}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.cart
  };
};
export default connect(mapStateToProps)(withRouter(MyItems));
