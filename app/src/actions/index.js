import axios from 'axios';
import { API_ENDPOINTS } from '../utils/api_endpoints';
import {
  SELECT_ACTIVITY,
  CLEAR_ACTIVITY,
  ADD_ACTIVITY_HISTORY_SUCCESS,
  ADD_ACTIVITY_HISTORY_FAILURE,
  GET_ACTIVITY_HISTORY
} from '../constants';

export function selectActivity(activity) {
  return dispatch => {
    return dispatch({
      type: SELECT_ACTIVITY,
      payload: activity
    });
  };
}

export function clearActivity() {
  return {
    type: CLEAR_ACTIVITY
  };
}

export function getHistoryActivities() {
  return dispatch => {
    axios
      .get(API_ENDPOINTS.historyActivity)
      .then(resp => {
        if (resp.status === 200) {
          return dispatch({
            type: GET_ACTIVITY_HISTORY,
            payload: resp.data
          });
        }

        return dispatch({
          type: GET_ACTIVITY_HISTORY,
          payload: []
        });
      })
      .catch(err => {
        return dispatch({
          type: GET_ACTIVITY_HISTORY,
          payload: []
        });
      });
  };
}

export function addHistoryActivity(activity) {
  return dispatch => {
    axios
      .post(API_ENDPOINTS.historyActivity, {
        ...activity
      })
      .then(resp => {
        console.log('resp', resp);
        if (resp.status === 201) {
          return dispatch({
            type: ADD_ACTIVITY_HISTORY_SUCCESS,
            payload: resp.data
          });
        }
        return dispatch({
          type: ADD_ACTIVITY_HISTORY_FAILURE
        });
      })
      .catch(err => {
        return dispatch({
          type: ADD_ACTIVITY_HISTORY_FAILURE
        });
      });
  };
}
