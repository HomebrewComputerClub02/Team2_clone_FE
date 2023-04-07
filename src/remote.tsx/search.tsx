import { client } from '../utils/network';

export async function searchListApi() {
  return await client.get('/search');
}
