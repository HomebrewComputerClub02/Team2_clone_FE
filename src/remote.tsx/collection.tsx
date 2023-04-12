import { client } from '../utils/network';

export async function followAlbumsApi() {
  return await client.get('/collection/albums', {
    headers: {
      Authorization: localStorage.getItem('jwtToken'),
      'Access-Control-Allow-Origin': 'http://192.168.200.150:3000',
      'Access-Control-Allow-Credentials': 'true',
    },
    withCredentials: true,
  });
}

export async function followArtistsApi() {
  return await client.get('/collection/artists', {
    headers: {
      Authorization: localStorage.getItem('jwtToken'),
      'Access-Control-Allow-Origin': 'http://192.168.200.150:3000',
      'Access-Control-Allow-Credentials': 'true',
    },
    withCredentials: true,
  });
}
