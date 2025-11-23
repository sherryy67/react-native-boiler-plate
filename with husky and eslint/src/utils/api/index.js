import {axiosInstance} from './api';

const home = '/Home';
const endpoints = {
  HOME_RESPONSE: `${home}/GetHomeResponse`,
};

export const getHomeResponse = async () => {
  try {
    const result = await axiosInstance.get(`${endpoints.HOME_RESPONSE}`);
    return result;
  } catch (error) {
    return error.response.data;
  }
};

export const createNewInvoice = async data => {
  try {
    const result = await axiosInstance.post(endpoints.Create_Invoice, data);
    return result;
  } catch (error) {
    return error.response.data;
  }
};
