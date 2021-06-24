import { FC } from 'react';

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
          <Input value={email} onChange={onChange} />
        </div>
        <div className='field'>
          <Input value={password} onChange={onChange} />
        </div>
        <div className='field'>
          <Button onClick={onLoginClick}>Register</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
