import ActionTypes from './action-types';
import { AuthenticateUserInterface, UnAuthenticateUserInterface } from 'types';

class Actions {
  authenticateUser: ({
    accessToken
  }: {
    accessToken: string;
  }) => AuthenticateUserInterface = ({
    accessToken
  }: {
    accessToken: string;
  }) => ({
    type: ActionTypes.AUTHENTICATE_USER,
    accessToken
  });

  unAuthenticateUser: () => UnAuthenticateUserInterface = () => ({
    type: ActionTypes.UNAUTHENTICATE_USER
  });
}

export default Actions;
