import classNames from 'classnames';
import { FC } from 'react';

import { InputProps, InputRender, InputClassNames } from 'types';

const labelStyles: InputClassNames = ({ error = '' }) =>
  classNames({
    'input-field__label': true,
    'input-field__label--error': error.length > 0
  });

const renderLabel: InputRender = (props) => {
  const { label = '', id } = props;
  return label.length > 0 ? (
    <label htmlFor={id} className={labelStyles(props)}>
      {label}
    </label>
  ) : null;
};

const renderError: InputRender = ({ error = '' }) => {
  return error.length > 0 ? (
    <div className='input-field__error'>{error}</div>
  ) : null;
};

const Input: FC<InputProps> = (props: InputProps) => {
  const {
    id = '',
    name = '',
    value,
    placeholder = '',
    type = 'text',
    onChange,
    onBlur,
    isDisabled
  } = props;
  return (
    <div className='input-field'>
      {renderLabel(props)}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        disabled={isDisabled}
      />
      {renderError(props)}
    </div>
  );
};

export default Input;
