import React, { Component } from 'react';
import './styles.sass';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {deleteOrder} from '../../actions/order/action'
import {connect} from 'react-redux';
import moment from 'moment';
import Axios from 'axios';
class DoneOrder extends Component {
  getTime = (utc) => {
    return utc !== 'Chưa xác định' ? moment(Number(utc)).format('MM-DD-YYYY') : utc;
  }
  deleteModal = () => {
    confirmAlert({
      title: 'Are you sure ?',
      message: 'Bạn thực sự muốn xoá đơn hàng này ?',
      buttons: [
          {
          label: 'Xoá',
          onClick: () =>  {this.props.deleteOrder(this.props.order.id);
                           Axios.post('/api/changestatus', {orderId: this.props.order.id, status: 3})
                          }
          },
          {
          label: 'Mình nhầm'
          }
      ]
    });
  }
  getOrderType() {
    if(this.props.order.status == 1) {
      return (
        <h4>
        Đơn hàng có ID <em>#{this.props.order.id}</em> đã được giao thành công
        <br/>
        Thời gian giao hàng: <em>{this.getTime(this.props.order.time_end)}</em>
        <br/>
        Tổng giá trị đơn: <em>{this.props.order.total} VNĐ</em>
        </h4>
      )
    }
    if(this.props.order.status == 2) {
      return (
        <h4>
        Đơn hàng có ID <em>#{this.props.order.id}</em> đã bị huỷ
        <br/>
        Thời gian huỷ: <em>{this.getTime(this.props.order.time_end)}</em>
        <br/>
        Tổng giá trị đơn: <em>{this.props.order.total} VNĐ</em>
        </h4>
      )
    }
  }
  render() {
    return (
      <div className="doneWrapper">
        <div className="upper">
          <div className="userImg" />
          {this.getOrderType()}
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

