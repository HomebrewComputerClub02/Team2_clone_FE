import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://172.30.1.43/',
});
