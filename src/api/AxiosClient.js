// api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
import {BASE_URL} from './Common';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async config => {
  // console.log(`**send: `, config)
  return config;
});

axiosClient.interceptors.response.use(
  response => {
    // console.log(`**recieve: `, response)
    if (response && response.data) {
      return response.data;
    }
    return response;

  },
  error => {
    throw error;
  },
);


export default axiosClient;
