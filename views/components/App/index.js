import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import Header from '../Header/index';
import Footer from '../Footer/index';
import './styles.sass';
import '../../styles/animation.sass';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <ReactCSSTransitionGroup
          transitionName="content"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <div key={window.document.location.pathname}>
            {this.props.children}
            <Footer />
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

App.defaultProps = {
  children: PropTypes.element,
  location: PropTypes.object,
  "location.pathname": PropTypes.string
};

export default App;
