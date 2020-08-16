import React, { Component } from 'react';
import {connect} from 'react-redux';
import BasicInfo from '../BasicInfo/index';
import OtherInfo from '../OtherInfo/index';
import './styles.sass';

class Profile extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');
  }
  render() {
    return (
      <div className="infoWrapper">
        <BasicInfo id = {this.props.id} />
        <OtherInfo id = {this.props.id} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    id: state.auth.id
  };
};
export default connect(mapStateToProps)(Profile);
