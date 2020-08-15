import React, { Component } from 'react';

import './styles.sass';

class OtherInfo extends Component {
  state = {
    locationEditing: false,
    contactEditing: false,
    passwordEditing: false
  };
  getLocationData() {
    if (this.state.locationEditing) {
      return (
        <div className="lIWrapper" key="lIWrapper">
          <div className="inputWrapper">
            <label htmlFor="localAddress">Local Address:</label>
            <input id="localAddress" className="localAddress" type="text" placeholder="Local Address" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="city">City:</label>
            <input id="city" className="city" type="text" placeholder="City" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="state">State:</label>
            <input id="state" className="state" type="text" placeholder="State" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="landmark">Landmark:</label>
            <input id="landmark" className="landmark" type="text" placeholder="Landmark" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="country">Country:</label>
            <input id="country" className="country" type="text" placeholder="Country" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="pincode">Pin Code:</label>
            <input id="pincode" className="pinCode" type="text" placeholder="Pin Code" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="lIWrapper" key="lIWrapperText">
          <div className="inputWrapper">
            <label>Local Address:</label>
            <p className="inputData">House no 33</p>
          </div>
          <div className="inputWrapper">
            <label>City:</label>
            <p className="inputData">HCM</p>
          </div>
          <div className="inputWrapper">
            <label>State:</label>
            <p className="inputData">Q7</p>
          </div>
          <div className="inputWrapper">
            <label>Landmark:</label>
            <p className="inputData">Campus</p>
          </div>
          <div className="inputWrapper">
            <label>Country:</label>
            <p className="inputData">VNG</p>
          </div>
          <div className="inputWrapper">
            <label>Pin Code:</label>
            <p className="inputData">65000</p>
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
            <input id="email" className="email" type="email" placeholder="Email" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="phone">Phone no:</label>
            <input id="phone" className="phone" type="tel" placeholder="Phone No" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="cIWrapper" key="cIWrapperText">
          <div className="inputWrapper">
            <label>Email:</label>
            <p className="inputData">tnah.work@gmail.com</p>
          </div>
          <div className="inputWrapper">
            <label>Phone no:</label>
            <p className="inputData">+91-9999999999</p>
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
      </div>
    );
  }
}

export default OtherInfo;
