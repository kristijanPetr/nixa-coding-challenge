const axios = require('axios');
const { API_ENDPOINTS } = require('./api_endpoints');

export const getPosts = () => {
  return axios
    .get(API_ENDPOINTS.GET_POSTS)
    .then(resp => console.log('resp', resp.data))
    .catch(err => console.log('err', err));
};
