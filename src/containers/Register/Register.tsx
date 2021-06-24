import { ChangeEvent, Component, FormEvent, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { RegisterUI } from 'pages';
import { RegisterProps, RegisterState } from 'types';

import ApiAdapter from './utils/api-adapter';
import Actions from './store/actions';

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

  register = async (): Promise<void> => {
    try {
      const { authenticate } = this.props;
      const { email, password } = this.state;
      const api = new ApiAdapter();
      const { token } = await api.register({ email, password });
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
      onRegisterClick: this.onRegisterClick
    };

    return <RegisterUI events={events} data={data} />;
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

export default connect(null, mapDispatchToProps)(Register);
