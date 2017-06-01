import * as types from './actionTypes';
import db from '../db';

export function loadProfiles() {
  return dispatch => {
    db.profiles.toArray().then(profiles =>
      dispatch({
        type: types.LOAD_PROFILES,
        profiles
      })
    );
  };
}

export function createProfile(profile) {
  return dispatch => {
    db.profiles.add(profile).then(id =>
      dispatch({
        type: types.CREATE_PROFILE,
        profile: Object.assign({}, profile, { id })
      })
    );
  };
}