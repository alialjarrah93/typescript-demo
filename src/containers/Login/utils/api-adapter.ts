import axios from 'axios';

import { LoginResponse, AuthenticationInfo } from 'types';
import MainApiAdapter from 'utils/api-adapter';

class ApiAdapter extends MainApiAdapter {
  async login(userInfo: AuthenticationInfo): Promise<LoginResponse> {
    const { data } = await axios.post<LoginResponse>('/login', userInfo);
    return data;
  }
}

export default ApiAdapter;
