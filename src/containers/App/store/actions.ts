import ActionTypes from './action-types';
import { AuthenticateUserInterface, UnAuthenticateUserInterface } from 'types';

class Actions {
  authenticateUser: (accessToken: string) => AuthenticateUserInterface = (
    accessToken: string
  ) => ({
    type: ActionTypes.AUTHENTICATE_USER,
    accessToken
  });

  unAuthenticateUser: () => UnAuthenticateUserInterface = () => ({
    type: ActionTypes.UNAUTHENTICATE_USER
  });
}

export default Actions;
