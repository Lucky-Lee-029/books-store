import React, { Component } from 'react';
import './styles.sass';

class PurchasePanel extends Component {

  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }

  render() {
    return (
      <div className = "purchasePanel">
        <div className="lIWrapper" key="lIWrapperText">
          <div className="inputWrapper">
            <label>Tổng tiền:</label>
            <p className="inputData">50.000 VNĐ</p>
          </div>
          <button>Thanh toán</button>
        </div>
      </div>
    );
  }
}

export default PurchasePanel;