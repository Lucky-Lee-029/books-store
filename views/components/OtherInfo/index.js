import React, { Component } from 'react';
import './styles.sass';
import Axios from 'axios';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';

const SweetAlert = withSwalInstance(swal);
class OtherInfo extends Component {
  state = {
    show: false,
    locationEditing: false,
    contactEditing: false,
    passwordEditing: false,
    location: {
      local: "Your address",
      city: "Big City",
      state: "Big City Boy",
      landmark: "Old Landmark",
      country: "Vietnam",
      code: "65000"
    },
    contact: {
      phone: "+84-9999999999",
      mail: "bigcityboy@gmail.com"
    }
  };
  componentDidMount() {
    Axios.post('/api/otherinfor', {id: this.props.id}).then((res) => this.setState({contact: {phone: res.data.phone, mail: res.data.email}})); 
    Axios.post('/api/getaddress', {id: this.props.id}).then((res) => this.setState({location: res.data}))
  }
  mergeObject(target, merging) {
    return Object.keys(target).reduce((dest, key) => {
      if(merging.hasOwnProperty(key)) {
        dest[key] = merging[key];
      }
      else {
        dest[key] = target[key];
      }
      return dest;
    }, {});
  }
  getData = (target) => {
    switch(target) {
      case 'LOCATION': case 'CONTACT':
        target = target.toLowerCase();
        const nodeList = document.querySelectorAll(`.${target}`);
        const changed = Array.prototype.filter.call(nodeList, (node) => node.value);
        const newState = this.mergeObject(this.state[target], changed.reduce((map, node) => {map[node.id] = node.value; return map;},{}));
        this.setState({[target]: newState});
        if(target == 'location') {
          const text = Object.keys(newState).reduce((data, key) => {
            if(data !== "") data = data + ';' + newState[key];
            else data += newState[key];
            return data;
          }, "");
          Axios.post('/api/editaddress', {id: this.props.id, address: text});
        }
        if(target == 'contact') {
          const id = {id: this.props.id};
          Axios.post('/api/editcontact', {...id, ...newState});
        }        
        break;
      case 'PASSWORD':
        const old = document.getElementById("old-pass").value;
        const pass = document.getElementById("new-pass").value;
        Axios.post('/api/editpass', {id: this.props.id, old_pass: old, new_pass: pass}).then((res) => {
          if(!res.data) {
            this.setState({show: true});
          }
        });
        break;
    }
  }
  getLocationData() {
    if (this.state.locationEditing) {
      return (
        <div className="lIWrapper" key="lIWrapper">
          <div className="inputWrapper">
            <label htmlFor="localAddress">Local Address:</label>
            <input id="local" className="location" type="text" placeholder="Không thay đổi" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="city">Tỉnh/thành phố:</label>
            <input id="city" className="location" type="text" placeholder="Không thay đổi" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="state">Quận/huyện:</label>
            <input id="state" className="location" type="text" placeholder="Không thay đổi" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="landmark">Phường/xã:</label>
            <input id="landmark" className="location" type="text" placeholder="Không thay đổi" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="country">Quốc gia:</label>
            <input id="country" className="location" type="text" placeholder="Không thay đổi" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="code">Mã bưu điện:</label>
            <input id="code" className="location" type="text" placeholder="Không thay đổi" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="lIWrapper" key="lIWrapperText">
          <div className="inputWrapper">
            <label>Local Address:</label>
            <p className="inputData">{this.state.location.local}</p>
          </div>
          <div className="inputWrapper">
            <label>Tỉnh/thành phố:</label>
            <p className="inputData">{this.state.location.city}</p>
          </div>
          <div className="inputWrapper">
            <label>Quận/huyện:</label>
            <p className="inputData">{this.state.location.state}</p>
          </div>
          <div className="inputWrapper">
            <label>Phường/xã:</label>
            <p className="inputData">{this.state.location.landmark}</p>
          </div>
          <div className="inputWrapper">
            <label>Quốc gia:</label>
            <p className="inputData">{this.state.location.country}</p>
          </div>
          <div className="inputWrapper">
            <label>Mã bưu điện:</label>
            <p className="inputData">{this.state.location.code}</p>
          </div>
        </div>
      );
    }
  }

  getContactData() {
    if (this.state.contactEditing) {
      return (
        <div className="cIWrapper" key="cIWrapper">
          <div className="inputWrapper">
            <label htmlFor="email">Email:</label>
            <input id="email" className="contact" type="email" placeholder="Email" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="phone">Phone no:</label>
            <input id="phone" className="contact" type="tel" placeholder="Phone No" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="cIWrapper" key="cIWrapperText">
          <div className="inputWrapper">
            <label>Email:</label>
            <p className="inputData">{this.state.contact.mail}</p>
          </div>
          <div className="inputWrapper">
            <label>Phone no:</label>
            <p className="inputData">{this.state.contact.phone}</p>
          </div>
        </div>
      );
    }
  }
  getSecurityPanel() {
    if (this.state.passwordEditing) {
      return (
        <div className="cIWrapper" key="cIWrapper">
          <div className="inputWrapper">
            <label htmlFor="old password">Old password:</label>
            <input id="old-pass" className="old-password" type="password" placeholder="Nhập password hiện tại" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="new password">New password:</label>
            <input id="new-pass" className="new-password" type="password" placeholder="Nhập password mới" />
          </div>
        </div>
      );
    }
    else {
      return(
        <div className="cIWrapper" key="cIWrapperText">
          <div className="inputWrapper">
            <label>Password:</label>
            <p className="inputData">*********</p>
          </div>
        </div>
      )
    }
  }

  getButtons(info) {
    let target;
    switch(info) {
      case 'LOCATION':
        target = "locationEditing";
        break;
      case 'CONTACT':
        target = "contactEditing";
        break;
      case 'PASSWORD':
        target = "passwordEditing";
        break;
    }
    if(!this.state[target]) {
      return (
        <button 
          className="marB20"
          onClick={() => {
            this.setState({[target]: true });
        }}>
          Edit
        </button>
      );
    }
    else {
      return ([
        <button className="marB20"
          key="lSave"
          onClick={() => {
            this.getData(info);
            this.setState({ [target]: false });
          }}>
          Save
        </button>,
        <button className="marB20 cancelBtn"
          key="lCancel"
          onClick={() => {
            this.setState({ [target]: false });
          }}>
          Cancel
        </button>
      ])
    };
  }

  render() {
    return (
      <div className="otherInfo">
        <div className="locationInfo">
          <div className="heading">
            <h3 className="normal marB20">Location Info</h3>
            {this.getButtons('LOCATION')}
          </div>
            {this.getLocationData()}
        </div>
        <div className="contactInfo">
          <div className="heading">
            <h3 className="normal marB20">Contact Info</h3>
            {this.getButtons('CONTACT')}
          </div>
            {this.getContactData()}
        </div>
        <div className="sercurityInfo">
          <div className="heading">
            <h3 className="normal marB20">Security Info</h3>
            {this.getButtons('PASSWORD')}
          </div>
            {this.getSecurityPanel()}
        </div>
        <SweetAlert
        show={this.state.show}
        title="Failed"
        text="Bạn đã nhập sai mật khẩu hiện tại, vui lòng thử lại"
        onConfirm={() => this.setState({ show: false })}
        />
      </div>
    );
  }
}

export default OtherInfo;
