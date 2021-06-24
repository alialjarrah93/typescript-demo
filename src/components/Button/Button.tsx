import classNames from 'classnames';
import { FC } from 'react';
import { ButtonProps, ButtonClassNames } from 'types';

import enums from './enums';

const buttonStyles: ButtonClassNames = ({ size, color, extraClass }) =>
  classNames({
    'button flex flex-align-items-center flex-justify-content-center': true,
    [`button--${size}`]: true,
    [`button--${color}`]: true,
    [extraClass as string]: extraClass && extraClass.length > 0
  });

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    type = enums.types.submit,
    children,
    isDisabled = false,
    onClick
  } = props;
  return (
    <button
      className={buttonStyles(props)}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
