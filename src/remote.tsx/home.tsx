import { client } from '../utils/network';

export async function homeListApi() {
  return await client.get('/home', {
    headers: {
      Authorization: localStorage.getItem('jwtToken'),
      'Access-Control-Allow-Origin': 'http://192.168.200.150:3000',
      'Access-Control-Allow-Credentials': 'true',
    },
    withCredentials: true,
  });
}
