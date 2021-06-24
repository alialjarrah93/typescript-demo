import { FC } from 'react';

import { Input, Button } from 'components';

import { RegisterUIProps } from 'types';

const Register: FC<RegisterUIProps> = (props: RegisterUIProps) => {
  const {
    data: { email, password },
    events: { onFormSubmit, onChange, onRegisterClick }
  } = props;

  return (
    <div className='register'>
      <form onSubmit={onFormSubmit}>
        <div className='field'>
          <Input value={email} onChange={onChange} />
        </div>
        <div className='field'>
          <Input value={password} onChange={onChange} />
        </div>
        <div className='field'>
          <Button onClick={onRegisterClick}>Register</Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
