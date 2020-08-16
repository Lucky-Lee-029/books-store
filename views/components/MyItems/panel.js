import React, { Component } from 'react';
import './styles.sass';
import {connect} from 'react-redux'
import {addOrder} from '../../actions/order/action';
import {withRouter} from 'react-router-dom'
class PurchasePanel extends Component {

  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  purchase = () => {
    const order = {
      id: 0,
      time_start: Date.now(),
      time_end: 'Chưa xác định',
      total: this.props.total,
      status: 0,
      book: this.props.list
    }
    this.props.addOrder(order);
    this.props.history.push('/orders')
  }
  render() {
    return (
      <div className = "purchasePanel">
        <div className="lIWrapper" key="lIWrapperText">
          <div className="inputWrapper">
            <label>Tổng tiền:</label>
            <p className="inputData">{this.props.total} $</p>
          </div>
          <button onClick = {this.purchase}>Thanh toán</button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  addOrder
}

export default connect(null, mapDispatchToProps)(withRouter(PurchasePanel));
