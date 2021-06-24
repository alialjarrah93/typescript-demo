import { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  AuthenticateUserInterface,
  UnAuthenticateUserInterface,
  StoreState,
  AppProps,
  AppState
} from 'types';
import Enums from 'constants/enums';

import Actions from './store/actions';
import Routes from './Routes';

class App extends Component<AppProps, AppState> {
  state = { authStatus: '' };

  static getDerivedStateFromProps(nextProps: AppProps, prevState: AppState) {
    if (nextProps.authStatus !== prevState.authStatus) {
      return {
        authStatus: nextProps.authStatus
      };
    }
    return null;
  }

  componentDidUpdate(prevProps: AppProps, prevState: AppState): void {
    const { authStatus } = this.props;
    if (prevState.authStatus === authStatus) {
      return;
    }
    this.load();
  }

  load = async () => {
    try {
      const {
        accessToken,
        unAuthenticateUser,
        authenticateUser,
        history: { push, location }
      } = this.props;
      if (!accessToken) {
        unAuthenticateUser();
        return;
      }
      this.setState((prevState) => ({
        ...prevState,
        isLoading: true
      }));
      authenticateUser(accessToken);
      this.setState((prevState) => ({
        ...prevState,
        isLoading: false
      }));
      push('/');
    } catch (error) {
      console.log(error);
    }
  };

  render(): JSX.Element {
    const { authStatus } = this.props;
    return (
      <div className='app'>
        <Routes
          isAuthenticated={authStatus === Enums.app.status.authenticated}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ app: { accessToken, authStatus } }: StoreState) => ({
  accessToken,
  authStatus
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { unAuthenticateUser, authenticateUser } = new Actions();
  return {
    unAuthenticateUser: () =>
      dispatch<UnAuthenticateUserInterface>(unAuthenticateUser()),
    authenticateUser: (accessToken: string) =>
      dispatch<AuthenticateUserInterface>(authenticateUser(accessToken))
  };
};

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
