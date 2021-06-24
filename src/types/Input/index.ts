import { ChangeEvent } from 'react';

export interface Props {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  value: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
}

export type ClassNames = (props: Props) => string;

export type Render = (props: Props) => JSX.Element | null;
