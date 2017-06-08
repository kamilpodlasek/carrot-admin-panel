import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';
import countingSort from '../utilities/countingSort';
import generateProfiles from '../utilities/generateProfiles';//eslint-disable-line no-unused-vars
import CreateProfile from '../components/CreateProfile';
import ProfilesTable from '../components/ProfilesTable';
import JumbotronTop from '../components/styledComponents/JumbotronTop';
import ColCreateProfile from '../components/styledComponents/ColCreateProfile';
import ColProfilesTable from '../components/styledComponents/ColProfilesTable';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      profiles: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.profiles !== this.state.profiles) {
      let profiles = nextProps.profiles;
      //profiles = generateProfiles();
      let sortedProfiles = countingSort(profiles, 'carrots');
      this.setState({
        profiles: sortedProfiles
      });
    }
  }

  render() {
    return (
      <div>
        <JumbotronTop>
          <h1>Carrot Admin Panel</h1>
          <p>Helps you manage your harvest</p>
        </JumbotronTop>
        <ColCreateProfile sm={12}>
          <CreateProfile
            createProfile={this.props.actions.createProfile}
          />
        </ColCreateProfile>
        <ColProfilesTable sm={12}>
          <ProfilesTable
            profiles={this.state.profiles}
            deleteCarrots={this.props.actions.deleteCarrots}
            addCarrots={this.props.actions.addCarrots}
            deleteProfile={this.props.actions.deleteProfile}
          />
        </ColProfilesTable>
      </div>
    );
  }
}

App.propTypes = {
  profiles: PropTypes.array,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { profiles: state.profiles };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);