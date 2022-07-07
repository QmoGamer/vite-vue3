import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/',
  timeout: 1000,
});
