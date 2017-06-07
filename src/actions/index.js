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

export function deleteProfile(id) {
  return dispatch => {
    db.profiles.delete(id).then(() =>
      dispatch({
        type: types.DELETE_PROFILE,
        id
      })
    );
  };
}

export function addCarrots(id, amount) {
  let carrotsNew;
  return dispatch => {
    db.profiles.where(":id").equals(id).modify(profile => {
      carrotsNew = profile.carrots + amount;
      profile.carrots = carrotsNew;
    }).then(() =>
      dispatch({
        type: types.MANIPULATE_CARROTS,
        id,
        carrots: carrotsNew
      })
    );
  };
}

export function deleteCarrots(id, amount) {
  let carrotsNew;
  return dispatch => {
    db.profiles.where(":id").equals(id).modify(profile => {
      if(profile.carrots >= amount) {
        carrotsNew = profile.carrots - amount;
        profile.carrots = carrotsNew;
      } else {
        throw new Error("Too little carrots!");
      }
    }).then(() =>
      dispatch({
        type: types.MANIPULATE_CARROTS,
        id,
        carrots: carrotsNew
      })
    ).catch(err => console.log(err));
  };
}