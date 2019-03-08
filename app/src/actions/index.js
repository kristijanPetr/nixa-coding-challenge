import { LOGGED_USER, SELECT_ACTIVITY, CLEAR_ACTIVITY } from '../constants';
// Example actions with thunk dispatch
export function logUser(userObj) {
  return (dispatch, getState) => {
    dispatch(logUserAction(userObj));
  };
}

export function selectActivity(activity) {
  return dispatch => {
    return dispatch({
      type: SELECT_ACTIVITY,
      activity
    });
  };
}
export function clearActivity() {
  return {
    type: CLEAR_ACTIVITY
  };
}

function logUserAction(userObj) {
  console.log('Action Log User', userObj);
  const action = {
    type: LOGGED_USER,
    user: userObj
  };
  return action;
}
