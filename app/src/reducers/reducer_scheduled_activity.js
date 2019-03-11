import {
  ADD_ACTIVITY_SCHEDULED_SUCCESS,
  ADD_ACTIVITY_SCHEDULED_FAILURE,
  GET_ACTIVITY_SCHEDULED
} from '../constants';
export default (state = [], action) => {
  switch (action.type) {
    case GET_ACTIVITY_SCHEDULED:
      return action.payload;
    case ADD_ACTIVITY_SCHEDULED_SUCCESS:
      return [...state, action.payload];
    case ADD_ACTIVITY_SCHEDULED_FAILURE:
      return state;
    default:
      return state;
  }
};
