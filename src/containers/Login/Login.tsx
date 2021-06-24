import { ChangeEvent, Component, FormEvent, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { LoginUI } from 'pages';

import { LoginProps, LoginState } from 'types';

import ApiAdapter from './utils/api-adapter';
import Actions from './store/actions';

class Login extends Component<LoginProps, LoginState> {
  state = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
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

  login = async (): Promise<void> => {
    try {
      const { authenticate } = this.props;
      const { email, password } = this.state;
      const api = new ApiAdapter();
      const { token } = await api.login({ email, password });
      authenticate(token);
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

const mapDispatchToProps = (dispatch: Dispatch) => {
  const actions = new Actions();
  return {
    dispatch,
    authenticate: (accessToken: string) =>
      dispatch(actions.authenticate(accessToken))
  };
};

export default connect(null, mapDispatchToProps)(Login);
