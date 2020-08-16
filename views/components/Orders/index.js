import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DoneOrder from '../DoneOrder/index';
import PendingOrder from '../PendingOrder/index';
import './styles.sass';
import {connect} from 'react-redux'

class Orders extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }


  getAllPendingOrders() {
    return (this.props.orders.map((pending) => !pending.status ? <PendingOrder key = {pending.id} order = {pending}/> : null));
  }

  getAllDoneOrders() {
    return (this.props.orders.map((done) => done.status ? <DoneOrder key = {done.id} order = {done}/> : null));
  }


  render() {
    return (
      <div className="ordersWrapper">
        <div className="viewCardWrapper">
          <Link to="/cart"><button className="orderBtn allItemsBtn">Check my cart</button></Link>
        </div>
        {this.props.orders.filter((item) => item.status != 3).length ? 
        <div className="ordersInfoWrapper">
          <div className="doneWrapper">
            <h3 className="unCap">Done Order</h3>
            <div className="allDoneOrderWrapper">
              {this.getAllDoneOrders()}
            </div>
          </div>
          <div className="pendingWrapper">
            <h3 className="unCap">Pending Order</h3>
            <div className="allPendingOrderWrapper">
              {this.getAllPendingOrders()}
            </div>
          </div>
        </div>
        : <h2>Hiện tại bạn chưa có đơn hàng nào</h2>}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    orders: state.orders
  };
};
export default connect(mapStateToProps)(Orders);
