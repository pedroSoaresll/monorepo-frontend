import { combineReducers } from 'redux';
import examples from './example';
import repositories from './repositories'

export default combineReducers({
  examples,
  repositories
});
