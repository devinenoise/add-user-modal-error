import React from 'react';
import classes from './Button.module.css';

const Button = props => {
  return (
    // if props.type is defined it will be used otherwise default to button
    <button
      className={classes.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
