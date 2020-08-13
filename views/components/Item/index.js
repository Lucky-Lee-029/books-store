import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import './styles.sass';

class Item extends Component {
  render() {
    return(
      <div className="item">
        <div className="content" onClick={()=>{
          this.props.history.push('/item/123');
        }} />
      </div>
    );
  }
}

export default withRouter(Item);
