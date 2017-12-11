import axios from 'axios';

const request = (params) => {
  return axios[params.method || 'get'](params.url, params.params)
    .then(response => response)
    .catch(err => new Error(err));
};

export default request;
