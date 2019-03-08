import { combineReducers } from 'redux';
import user from './reducer_user';
import activity from './reducer_activity';
export default combineReducers({
  user,
  activity
});
