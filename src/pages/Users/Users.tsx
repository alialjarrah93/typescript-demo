import { FC } from 'react';

import { UsersUIProps } from 'types';

const Users: FC<UsersUIProps> = (props: UsersUIProps): JSX.Element => {
  const { data, events } = props;
  return <div className='users'>users</div>;
};

export default Users;
