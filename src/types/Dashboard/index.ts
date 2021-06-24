import ActionTypes from 'containers/Dashboard/store/action-types';

export interface FetchUsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }[];
}

export type DashboardGlobalState = {
  users: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }[];
};

export type UsersInterface = {
  users: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }[];
};

export interface FetchUsersInterface {
  type: typeof ActionTypes.FETCH_USERS;
  users: UsersInterface;
}

export type Action = FetchUsersInterface;
