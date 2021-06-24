import ActionTypes from 'containers/App/store/action-types';

export interface AuthenticateUserInterface {
  type: typeof ActionTypes.AUTHENTICATE_USER;
  accessToken: string;
}

export interface UnAuthenticateUserInterface {
  type: typeof ActionTypes.UNAUTHENTICATE_USER;
}

export type Action = AuthenticateUserInterface | UnAuthenticateUserInterface;

export type AppGlobalState = {
  accessToken: string;
  authStatus: string;
};

export interface RoutesProps {
  isAuthenticated?: boolean;
}
