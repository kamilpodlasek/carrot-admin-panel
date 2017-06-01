import * as types from '../actions/actionTypes';

export default function(state = [], action) {
  switch(action.type) {
    case types.LOAD_PROFILES: return [...state, ...action.profiles];
    case types.CREATE_PROFILE: return [...state, action.profile];
    default: return state;
  }
}