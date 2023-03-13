import React from 'react';
import style from './Button.module.css';

interface ButtonProps {
  color: string;
  onClick: () => void;
  children: string;
}

const Button = React.memo(function ({ color, onClick, children }: ButtonProps) {
  return (
    <button className={style.button} style={{ backgroundColor: color }} onClick={onClick}>
      {children}
    </button>
  );
});

export default Button;
