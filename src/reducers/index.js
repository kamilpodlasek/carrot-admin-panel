import { combineReducers } from 'redux';
import profiles from './profileReducer';

const rootReducer = combineReducers({
  profiles
});

export default rootReducer;