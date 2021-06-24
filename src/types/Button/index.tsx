import { ReactNode, MouseEvent } from 'react';

export interface Props {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'submit' | 'button' | 'reset';
  isDisabled?: boolean;
  size?: string;
  color?: string;
  extraClass?: string;
  path?: string;
}

export interface Enums {
  types: {
    submit: 'submit';
    button: 'button';
    reset: 'reset';
  };
  styles: {
    [key: string]: string;
  };
  sizes: {
    [key: string]: string;
  };
}

export type ClassNames = (props: Props) => string;
