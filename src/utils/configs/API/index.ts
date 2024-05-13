/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { Base_url } from '../environments';
import { getData } from '../asyncStorage';

interface ApiTypes {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  route: string;
  payload?: any;
  token?: any;
  params?: any;
  ContentType?: string;
  data?: any;
}

console.log(Base_url);
async function API({ method, route, payload, params, token, ContentType }: ApiTypes) {
  const user = await getData('userData');
  token = user.accessToken;
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
      url: `${Base_url}/api/${route}`,
      data: payload,
      headers: headers,
      params: params,
      timeout: 100000,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        console.log('error------------', error);
        if (error?.response?.status === 500) {
          console.log(error?.response?.data?.message || error || 'Something went wrong');
        } else {
          reject(error?.response?.data?.message || 'Something went wrong');
        }
      });
  });
}

export default API;

export function fetcher({ method, route, payload, token }: ApiTypes): any {
  return new Promise((resolve, reject) => {
    fetch(`http://127.0.0.1:5000/${route}`, {
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
