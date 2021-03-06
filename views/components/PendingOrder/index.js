import React, { Component } from 'react';
import './styles.sass';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {changeStatus} from '../../actions/order/action';
import {connect} from 'react-redux';
import moment from 'moment';
import Axios from 'axios';
class PendingOrder extends Component {
  getTime = (utc) => {
    return utc !== 'Chưa xác định' ? moment(Number(utc)).format('MM-DD-YYYY') : utc;
  }
  deleteModal = () => {
    confirmAlert({
      title: 'Are you sure ?',
      message: 'Bạn thực sự muốn huỷ đơn hàng này ?',
      buttons: [
          {
          label: 'Xoá',
          onClick: () =>  {this.props.changeStatus(this.props.order.id, 2); 
                           Axios.post('/api/changestatus', {orderId: this.props.order.id, status: 2})
                          }
          },
          {
          label: 'Mình nhầm'
          }
      ]
    });
  }
  render() {
    return (
      <div className="pendingWrapper">
        <div className="upper">
          <div className="userImg" />
          <h4>
            Đơn hàng có id <em>#{this.props.order.id}</em> của bạn đang được giao tới
            <br/>
            Thời gian giao dự kiến: <em>{this.getTime(this.props.order.time_end)}</em>
            <br/>
            Tổng giá trị: <em>$ {this.props.order.total}</em>
          </h4>
        </div>
        <div className="orderBtnWrapper lower">
          <button className="declineBtn normalBtn" onClick = {this.deleteModal}>Huỷ đơn hàng</button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  changeStatus
}

export default connect(null, mapDispatchToProps)(PendingOrder);
