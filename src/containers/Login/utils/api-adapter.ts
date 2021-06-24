import axios from 'axios';

import { LoginResponse, AuthenticationInfo } from 'types';
import MainApiAdapter from 'utils/api-adapter';

class ApiAdapter extends MainApiAdapter {
  async register(userInfo: AuthenticationInfo) {
    const { data } = await axios.post<LoginResponse>('/register', userInfo);
    return data;
  }
}

export default ApiAdapter;
