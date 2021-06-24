import { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { UsersUI } from 'pages';

import {
  FetchUsersInterface,
  UsersInterface,
  StoreState,
  UsersProps
} from 'types';

import ApiAdapter from './utils/api-adapter';
import Actions from './store/actions';

class Users extends Component<UsersProps> {
  state = {};

  componentDidMount(): void {
    this.load();
  }

  load = async () => {
    try {
      const { fetchUsers } = this.props;
      const api = new ApiAdapter();
      const { data } = await api.fetchUsers();
      console.log(data);
      fetchUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  render(): JSX.Element {
    const { users } = this.props;
    const data = { users };

    const events = {};

    return <UsersUI data={data} events={events} />;
  }
}

const mapStateToProps = ({ users: { data } }: StoreState) => ({
  users: data
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { fetchUsers } = new Actions();
  return {
    fetchUsers: (users: UsersInterface) =>
      dispatch<FetchUsersInterface>(fetchUsers(users))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
