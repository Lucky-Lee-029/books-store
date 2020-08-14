import React, { Component, PropTypes} from 'react';
import { withRouter, Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './styles.sass';

class UserItem extends Component {
  deleteModal = () => {
    confirmAlert({
      title: 'Are you sure ?',
      message: 'Bạn thực sự muốn xoá sản phẩm này ?',
      buttons: [
          {
          label: 'Xoá',
          onClick: () =>  {}
          },
          {
          label: 'Mình nhầm'
          }
      ]
    });
  }

  render() {
    return (
      <div className="uIWrapper">
        <div className="upper">
          <div className="userImg">
            <img src = {this.props.product.img}/>
          </div>
          <div className="itemInfo">
            <h3 className="itemName">
              <Link to={`item/${this.props.product.id}`}>{this.props.product.name}</Link>
            </h3>
            <p className="itemCost frm">${this.props.product.price}</p>
            <p className="addDate frm">23 Jan, 2020</p>
            <p className="itemDescription">{this.props.product.longDescription}</p>
            <div className="changeBtnWrapper lower">
              <button className="deleteBtn normalBtn" onClick={this.deleteModal} >Remove Item</button>
              <button className="viewProductBtn normalBtn" onClick = {() => this.props.history.push(`item/${this.props.product.id}`)}>View Item</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(UserItem);
