import { SELECT_ACTIVITY, CLEAR_ACTIVITY } from '../constants';
export default (state = null, action) => {
  switch (action.type) {
    case SELECT_ACTIVITY:
      return action.payload;
    case CLEAR_ACTIVITY:
      return null;
    default:
      return state;
  }
};
