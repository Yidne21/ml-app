/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import Base_url from '../../../utils/configs/environments';
interface ApiTypes {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  route: string;
  payload?: any;
  token?: any;
  params?: any;
  ContentType?: string;
}
console.log('Base_url', Base_url);
function API({ method, route, payload, params, token, ContentType }: ApiTypes) {
  console.log('route', route);
  console.log('method', method);
  console.log('payload', payload);
  console.log('params', params);
  console.log('token', token);
  console.log('ContentType', ContentType);
  const headers = {
    ...(token && { Authorization: `Bearer ${token}` }),
    ...(ContentType && { 'Content-Type': ContentType }),
  };
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: `http://192.168.137.209:5000/api/${route}`,
      data: payload,
      headers: headers,
      params: params,
      timeout: 20000,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        //console.log('error', error);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('server error');
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log('request made but no response');
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          reject(error?.response?.data?.message || 'Something went wrong');
        }
        //console.log(error.config);
      });
  });
}

export default API;

export function fetcher({ method, route, payload, token }: ApiTypes): any {
  return new Promise((resolve, reject) => {
    fetch(`${Base_url}/${route}`, {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: payload,
    }).then((res) => {
      if (res.status === 200) {
        resolve(res.json());
      } else if (res.status === 500) {
        console.log(res.statusText || 'Something went wrong');
      } else {
        reject(res.statusText || 'Something went wrong');
      }
    });
  });
}
