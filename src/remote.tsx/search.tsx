import { client } from '../utils/network';

export async function searchListApi() {
  return await client.get('/search', {
    headers: {
      Authorization: localStorage.getItem('jwtToken'),
      'Access-Control-Allow-Origin': 'http://192.168.200.150:3000',
      'Access-Control-Allow-Credentials': 'true',
    },
    withCredentials: true,
  });
}

export async function genreApi(name: string) {
  return await client.get(`/genre/${name}`, {
    headers: {
      Authorization: localStorage.getItem('jwtToken'),
      'Access-Control-Allow-Origin': 'http://192.168.200.150:3000',
      'Access-Control-Allow-Credentials': 'true',
    },
    withCredentials: true,
  });
}
