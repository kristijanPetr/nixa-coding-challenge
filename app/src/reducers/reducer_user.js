import { LOGGED_USER } from "../constants";
export default (state = null, action) => {
  switch (action.type) {
    case LOGGED_USER:
      return action.user;
    default:
      return state;
  }
};
