import axios from 'axios';

import { FetchUsersResponse } from 'types';
import MainApiAdapter from 'utils/api-adapter';

class ApiAdapter extends MainApiAdapter {
  async fetchUsers(): Promise<FetchUsersResponse> {
    const { data } = await axios.get<FetchUsersResponse>('/users?page=1');
    return data;
  }
}

export default ApiAdapter;
