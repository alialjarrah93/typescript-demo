import ActionTypes from './action-types';
import { FetchUsersInterface, UsersInterface } from 'types';

class Actions {
  fetchUsers: (users: UsersInterface) => FetchUsersInterface = (users) => ({
    type: ActionTypes.FETCH_USERS,
    users
  });
}

export default Actions;
