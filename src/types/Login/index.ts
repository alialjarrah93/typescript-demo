import { formSubmit, inputChange, buttonClick } from '../Common';

export interface State {
  email: string;
  password: string;
  errors: {
    email: string;
    password: string;
  };
}

export interface Props {
  authenticate: Function;
}

export interface UIProps {
  data: {
    email: string;
    password: string;
    errors: {
      email: string;
      password: string;
    };
  };
  events: {
    onChange: inputChange;
    onFormSubmit: formSubmit;
    onLoginClick: buttonClick;
  };
}

export interface Response {
  token: string;
}
