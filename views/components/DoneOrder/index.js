import React, { Component } from 'react';
import './styles.sass';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {deleteOrder} from '../../actions/order/action'
import {connect} from 'react-redux';

class DoneOrder extends Component {
  deleteModal = () => {
    confirmAlert({
      title: 'Are you sure ?',
      message: 'Bạn thực sự muốn xoá đơn hàng này ?',
      buttons: [
          {
          label: 'Xoá',
          onClick: () =>  {this.props.deleteOrder(this.props.order.id)}
          },
          {
          label: 'Mình nhầm'
          }
      ]
    });
  }
  render() {
    return (
      <div className="doneWrapper">
        <div className="upper">
          <div className="userImg" />
          <h4>
            Đơn hàng có ID <em>#{this.props.order.id}</em> đã được giao thành công
            <br/>
            Thời gian giao hàng: <em>{this.props.order.time_end}</em>
            <br/>
            Tổng giá trị đơn: <em>{this.props.order.total}</em>
          </h4>
        </div>
        <div className="tradeBtnWrapper lower">
          <button className="acceptBtn normalBtn">Review</button>
          <button className="declineBtn normalBtn" onClick = {this.deleteModal}>Remove</button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  deleteOrder
}

export default connect(null, mapDispatchToProps)(DoneOrder);

