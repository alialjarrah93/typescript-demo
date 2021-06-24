import axios from 'axios';

import { RegisterResponse, AuthenticationInfo } from 'types';
import MainApiAdapter from 'utils/api-adapter';

class ApiAdapter extends MainApiAdapter {
  async register(userInfo: AuthenticationInfo): Promise<RegisterResponse> {
    const { data } = await axios.post<RegisterResponse>('/register', userInfo);
    return data;
  }
}

export default ApiAdapter;
