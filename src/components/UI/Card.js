import React from 'react';
import classes from './Card.module.css';

//props.className allows for any child components to use className to be added with the .card class
const Card = props => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
