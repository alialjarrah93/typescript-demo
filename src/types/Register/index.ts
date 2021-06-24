import { formSubmit, inputChange, buttonClick } from '../Common';

export interface State {
  email: string;
  password: string;
  errors: {
    email: string;
    password: string;
  };
}

export interface Props {}

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
    onRegisterClick: buttonClick;
  };
}

export interface Response {
  id: number;
  token: string;
}
