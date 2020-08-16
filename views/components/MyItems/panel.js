import React, { Component } from 'react';
import './styles.sass';
import {connect} from 'react-redux'
import {addOrder} from '../../actions/order/action';
import {withRouter} from 'react-router-dom'
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';
import Axios from 'axios';

const SweetAlert = withSwalInstance(swal);
class PurchasePanel extends Component {
  state = {
    show: false
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  purchase = () => {
    Axios.post('/api/getaddress', {id: this.props.id}).then((res) => {
      let flag = true;
      Object.keys(res.data).forEach((key) => {
        if(res.data[key] === "Chưa xác định") {
          flag = false;
        }
      });
      if(flag) {
        const id = Math.floor(Math.random()*1000000000);
        const order = {
          id: id,
          time_start: Date.now(),
          time_end: 'Chưa xác định',
          total: this.props.total,
          status: 0,
          books: this.props.list
        }
        this.props.addOrder(order);
        order.idUser = this.props.id;
        Axios.post('/api/addorder', order);        
        this.props.history.push('/orders')
      }
      else {
        this.setState({show: true});
      }
    })

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
        <SweetAlert
        show={this.state.show}
        title="Failed"
        text="Bạn chưa hoàn thiện địa chỉ giao hàng, hãy hoàn thiện địa chỉ của bạn trong thẻ Profile"
        onConfirm={() => this.setState({ show: false })}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    id: state.auth.id
  };
};
const mapDispatchToProps = {
  addOrder
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PurchasePanel));
