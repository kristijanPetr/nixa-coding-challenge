import { combineReducers } from 'redux';
import user from './reducer_user';
import activity from './reducer_activity';
import historyActivity from './reducer_history_activity';
import scheduledActivity from './reducer_scheduled_activity';
export default combineReducers({
  user,
  activity,
  historyActivity,
  scheduledActivity
});
