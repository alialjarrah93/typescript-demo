import { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import {
  AuthenticateUserInterface,
  UnAuthenticateUserInterface,
  StoreState
} from 'types';

import Actions from './store/actions';
import Routes from './Routes';

class App extends Component {
  state = {};

  render(): JSX.Element {
    return (
      <div className='app'>
        <Routes />
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
    authenticateUser: (data: { accessToken: string }) =>
      dispatch<AuthenticateUserInterface>(authenticateUser(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
