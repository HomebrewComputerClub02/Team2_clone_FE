import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://110.34.103.66:25543',
});
