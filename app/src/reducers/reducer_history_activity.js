import {
  ADD_ACTIVITY_HISTORY_FAILURE,
  ADD_ACTIVITY_HISTORY_SUCCESS,
  GET_ACTIVITY_HISTORY
} from '../constants';
export default (state = [], action) => {
  switch (action.type) {
    case GET_ACTIVITY_HISTORY:
      return action.payload;
    case ADD_ACTIVITY_HISTORY_SUCCESS:
      return [...state, action.payload];
    case ADD_ACTIVITY_HISTORY_FAILURE:
      return state;
    default:
      return state;
  }
};
