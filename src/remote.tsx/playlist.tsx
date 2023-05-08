import { client } from '../utils/network';
// 플레이리스트 만들기
export async function makePlaylistApi() {
  return await client.post('/playList', null, {
    headers: {
      Authorization: localStorage.getItem('jwtToken'),
      'Access-Control-Allow-Origin': 'http://192.168.200.150:3000',
      'Access-Control-Allow-Credentials': 'true',
    },
    withCredentials: true,
  });
}
// 플레이리스트 이름 변경
export async function changePlaylistNameApi(id: string, name: string) {
  return await client.put(
    '/playList',
    { playListid: id, name: name },
    {
      headers: {
        Authorization: localStorage.getItem('jwtToken'),
        'Access-Control-Allow-Origin': 'http://192.168.200.150:3000',
        'Access-Control-Allow-Credentials': 'true',
      },
      withCredentials: true,
    },
  );
}
// 유저의 플레이리스트 목록 조회
export async function getUserPlaylistApi() {
  return await client.get('/playList/getUserPlayList', {
    headers: {
      Authorization: localStorage.getItem('jwtToken'),
      'Access-Control-Allow-Origin': 'http://192.168.200.150:3000',
      'Access-Control-Allow-Credentials': 'true',
    },
    withCredentials: true,
  });
}
// 플레이리스트 조회
export async function checkPlaylistApi(id: string) {
  return await client.get(`/playList/${id}`, {
    headers: {
      Authorization: localStorage.getItem('jwtToken'),
      'Access-Control-Allow-Origin': 'http://192.168.200.150:3000',
      'Access-Control-Allow-Credentials': 'true',
    },
    withCredentials: true,
  });
}
// 플레이리스트 삭제
export async function deletePlaylistApi(id: string) {
  return await client.delete(`/playList/${id}`, {
    headers: {
      Authorization: localStorage.getItem('jwtToken'),
      'Access-Control-Allow-Origin': 'http://192.168.200.150:3000',
      'Access-Control-Allow-Credentials': 'true',
    },
    withCredentials: true,
  });
}
