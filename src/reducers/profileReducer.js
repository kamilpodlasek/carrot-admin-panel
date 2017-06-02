import * as types from '../actions/actionTypes';

export default function(state = [], action) {
  switch(action.type) {
    case types.LOAD_PROFILES: return [...state, ...action.profiles];
    case types.CREATE_PROFILE: return [...state, action.profile];
    case types.DELETE_PROFILE: return state.filter(profile => profile.id !== action.id);
    case types.MANIPULATE_CARROTS: return state.map(profile => {
      if(profile.id === action.id) {
        profile.carrots = action.carrots;
      }
      return profile;
    });
    default: return state;
  }
}