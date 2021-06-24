import { ChangeEvent, FormEvent, MouseEvent } from 'react';

export type inputChange = (event: ChangeEvent<HTMLInputElement>) => void;
export type formSubmit = (event: FormEvent<HTMLFormElement>) => void;
export type buttonClick = (event: MouseEvent<HTMLButtonElement>) => void;

export interface AuthenticationInfo {
  email: string;
  password: string;
}
