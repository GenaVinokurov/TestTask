import classNames from 'classnames';
import React from 'react';
import style from './Button.module.css';

interface ButtonProps {
  variant: string;
  onClick: () => void;
  children: string;
}

const Button = React.memo(function ({ variant, onClick, children }: ButtonProps) {
  return (
    <button
      className={`${classNames(style.button, {
        [style[variant]]: variant,
      })}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

export default Button;
