import request from '../lib/request';

const apiClient = new request();
const apiHost = 'http://localhost:5000';

export const fetch = dispatch => (module) => {
  dispatch({
    type: `FETCH_REQUEST_INIT`,
  });

  apiClient.get(`${apiHost}/${module}`)
  .then(data=> {
      dispatch({
        type: `FETCH_REQUEST_END`,
      });

      dispatch({
      type: `FETCH_${module.toUpperCase()}_SUCCESS`,
      payload: data,
    });
  })
  .catch(err => dispatch({
    type: `FETCH_${module.toUpperCase()}_ERROR`,
    err,
  }))
}


export const put = dispatch => (module, data) => {
  dispatch({
    type: `PUT_REQUEST_INIT`,
  });

  apiClient.put(`${apiHost}/${module}`, data)
  .then(data=> {
      dispatch({
        type: `PUT_REQUEST_END`,
      });

      dispatch({
      type: `PUT_${module.toUpperCase()}_SUCCESS`,
      payload: data,
    });
  })
  .catch(err => dispatch({
    type: `PUT_${module.toUpperCase()}_ERROR`,
    err,
  }))
}
