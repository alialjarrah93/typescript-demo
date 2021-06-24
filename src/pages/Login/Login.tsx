import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Input, Button } from 'components';
import { LoginUIProps } from 'types';

const Login: FC<LoginUIProps> = (props: LoginUIProps) => {
  const {
    data: { email, password },
    events: { onFormSubmit, onChange, onLoginClick }
  } = props;
  return (
    <div className='login'>
      <h1>Login</h1>
      <form onSubmit={onFormSubmit}>
        <div className='field'>
          <Input
            id='email'
            name='email'
            label='Email'
            value={email}
            onChange={onChange}
          />
        </div>
        <div className='field'>
          <Input
            id='password'
            name='password'
            label='Password'
            value={password}
            onChange={onChange}
          />
        </div>
        <div className='field'>
          <Button onClick={onLoginClick}>Login</Button>
          <Link to='/register'>Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
