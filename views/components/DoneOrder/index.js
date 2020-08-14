import React, { Component } from 'react';
import './styles.sass';

class DoneOrder extends Component {
  render() {
    return (
      <div className="doneWrapper">
        <div className="upper">
          <div className="userImg" />
          <h4>
            Đơn hàng có ID #id đã được giao vào ngày 22 May 2020
            <br/>
            Tổng giá trị đơn: <em>50.000 VNĐ</em>
          </h4>
        </div>
        <div className="tradeBtnWrapper lower">
          <button className="acceptBtn normalBtn">Review</button>
          <button className="declineBtn normalBtn">Remove</button>
        </div>
      </div>
    );
  }
}

export default DoneOrder;
