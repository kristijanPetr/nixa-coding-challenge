import { LOGGED_USER } from '../constants';
// Example actions with thunk dispatch
export function logUser(userObj) {
  return (dispatch, getState) => {
    dispatch(logUserAction(userObj));
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
