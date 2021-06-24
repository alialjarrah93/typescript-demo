import AppActions from 'containers/App/store/actions';

class Actions extends AppActions {
  authenticate(accessToken: string) {
    return this.authenticateUser(accessToken);
  }
}

export default Actions;
