import React, { Component } from 'react';

import './styles.sass';

class BasicInfo extends Component {
  product = {
    name: "Trương Nguyễn Anh Hoàng"
  }
  render() {
    return(
      <div className="basicInfo">
        <div className="profilePic" />
        <div className="nameWrapper">
          <h3 className="normal">{this.product.name}</h3>
        </div>
      </div>
    );
  }
}

export default BasicInfo;
