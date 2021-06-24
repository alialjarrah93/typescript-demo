import ActionTypes from 'containers/Users/store/action-types';

export interface FetchUsersResponse {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }[];
}

export type UsersGlobalState = {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }[];
};

export type UsersInterface = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}[];

export interface FetchUsersInterface {
  type: typeof ActionTypes.FETCH_USERS;
  users: UsersInterface;
}

export type Action = FetchUsersInterface;

export interface Props {
  users: UsersInterface;
  fetchUsers: (users: UsersInterface) => void;
}

export interface UIProps {
  data: {
    users: UsersInterface;
  };
  events: {};
}
