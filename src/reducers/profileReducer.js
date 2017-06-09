import * as types from '../actions/actionTypes';

export default function(state = { profiles: [], error: null }, action) {
  switch(action.type) {
    case types.LOAD_PROFILES:
      return {
        ...state,
        profiles: [
          ...state.profiles,
          ...action.profiles
        ]
      };

    case types.CREATE_PROFILE:
      return {
        ...state,
        profiles: [
          ...state.profiles,
          action.profile
        ]
      };

    case types.DELETE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.filter(profile => profile.id !== action.id)};

    case types.MANIPULATE_CARROTS:
      return {
        ...state,
        profiles: state.profiles.map(profile => {
          if(profile.id === action.id) {
            profile.carrots = action.carrots;
          }
          return profile;
        })
      };

    case types.ADD_ERROR:
      return {
        ...state,
        error: action.error
      };

    case types.REMOVE_ERROR:
      return {
        ...state,
        error: null
      };

    default: return state;
  }
}