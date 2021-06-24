import { ChangeEvent, Component, FormEvent, MouseEvent } from 'react';

import { LoginUI } from 'pages';

import { LoginProps, LoginState } from 'types';

import ApiAdapter from './utils/api-adapter';

class Login extends Component<LoginProps, LoginState> {
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

  onLoginClick = (event: MouseEvent<HTMLButtonElement>): void => {
    this.login();
  };

  login = async () => {
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
      onLoginClick: this.onLoginClick
    };
    return <LoginUI data={data} events={events} />;
  }
}

export default Login;
