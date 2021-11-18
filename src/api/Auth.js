import {BASE_URL} from './Common';
import axios from 'axios';

const PATH = {
  login: '/auth/local',
  register: '/auth/local/register',
};

export const login = (username, password) => {
   axios({
    method: 'POST',
    url: BASE_URL + PATH.login,
    data: {
      identifier: username,
      password: password,
    },
  })
    .then(response => response.data)
    // .then(data => {
      // console.log(data.jwt);
    // })
    .catch(err => alert(err));
};
