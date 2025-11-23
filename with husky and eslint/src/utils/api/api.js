import axios from 'axios';
import {getAuthTokenDetails} from '../preferences/localStorage';

export const BASE_URL = 'https://dev-mispartes-api.azurewebsites.net/api/';
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
axiosInstance.interceptors.request.use(async function (config) {
  const token = await getAuthTokenDetails();
  config.headers.Authorization = token;
  return config;
});
