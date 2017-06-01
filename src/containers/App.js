import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    
    this.createProfile = this.createProfile.bind(this);
  }

  createProfile() {
    this.props.actions.createProfile({ name: "test", carrots: 10 });
  }

  render() {
    console.log("render", this.props);
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={this.createProfile}>Add Profile</button>
      </div>
    );
  }
}

App.propTypes = {
  profiles: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const { profiles } = state;
  return { profiles };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);