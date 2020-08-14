import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import UserItem from '../UserItem/index';
import PRODUCT from '../Data/index'
import './styles.sass';

class MyItems extends Component {

  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }

  render() {
    return (
      <div className="myItemsWrapper">
        <div className="backWrapper">
          <button
            onClick={() => {
              this.props.history.push('/');
            }}
            className="viewBtn viewItemBtn">
            + View more item
          </button>
        </div>
        {PRODUCT.map((data, i) => <UserItem key={i} product = {data}/>)}
      </div>
    );
  }
}

export default withRouter(MyItems);
