import { ChangeEvent, Component, FormEvent, MouseEvent } from 'react';

import { RegisterUI } from 'pages';
import { RegisterProps, RegisterState } from 'types';
import ApiAdapter from './utils/api-adapter';

class Register extends Component<RegisterProps, RegisterState> {
  state = {
    email: '',
    password: '',
    errors: {
      email: '',
      password: ''
    }
  };

  onChange = ({
    target: { name, value }
  }: ChangeEvent<HTMLInputElement>): void => {
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: ''
      }
    }));
  };

  onFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  onRegisterClick = (event: MouseEvent<HTMLButtonElement>): void => {
    this.register();
  };

  register = async () => {
    try {
      const { email, password } = this.state;
      const api = new ApiAdapter();
      const result = api.register({ email, password });
    } catch (error) {
      console.log(error);
    }
  };

  render(): JSX.Element {
    const { email, password, errors } = this.state;
    const data = { email, password, errors };
    const events = {
      onChange: this.onChange,
      onFormSubmit: this.onFormSubmit,
      onRegisterClick: this.onRegisterClick
    };

    return <RegisterUI events={events} data={data} />;
  }
}

export default Register;
