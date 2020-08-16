import React, { Component } from 'react';
import Axios from 'axios'
import './styles.sass';

class BasicInfo extends Component {
  product = {
    name: ""
  }
  componentDidMount() {
    Axios.post('/api/basicinfor', {id: this.props.id}).then((res) =>this.setState({name: res.data.name})); 
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
