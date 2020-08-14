import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DoneOrder from '../DoneOrder/index';
import PendingOrder from '../PendingOrder/index';
import './styles.sass';

class Orders extends Component {

  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }


  getAllPendingOrders() {
    return ([
      <PendingOrder key="1" />,
      <PendingOrder key="2" />
    ]);
  }

  getAllDoneOrders() {
    return ([
      <DoneOrder key="1" />,
      <DoneOrder key="2" />
    ]);
  }


  render() {
    return (
      <div className="ordersWrapper">
        <div className="viewCardWrapper">
          <Link to="/cart"><button className="orderBtn allItemsBtn">Check my cart</button></Link>
        </div>
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
      </div>
    );
  }
}

export default Orders;
