import React, { Component } from 'react';
import './styles.sass';

class PendingOrder extends Component {
  render() {
    return (
      <div className="pendingWrapper">
        <div className="upper">
          <div className="userImg" />
          <h4>
            Đơn hàng của bạn đang được giao tới
            <br/>
            Thời gian dự kiến: <em>22 May 2020</em>
          </h4>
        </div>
        <div className="orderBtnWrapper lower">
          <button className="declineBtn normalBtn">Huỷ đơn hàng</button>
        </div>
      </div>
    );
  }
}

export default PendingOrder;
