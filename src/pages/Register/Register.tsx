import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Input, Button } from 'components';

import { RegisterUIProps } from 'types';

const Register: FC<RegisterUIProps> = (props: RegisterUIProps) => {
  const {
    data: { email, password },
    events: { onFormSubmit, onChange, onRegisterClick }
  } = props;

  return (
    <div className='register'>
      <h1>Register</h1>
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
          <Button onClick={onRegisterClick}>Register</Button>
          <Link to='/login'>Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
