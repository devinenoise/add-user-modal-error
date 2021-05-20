import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import Card from './Card';
import Wrapper from '../Helpers/Wrapper';
import Button from './Button';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = props => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const Modal = props => {
  return (
    <Wrapper>
      {/* portals allow you to place components in the DOM outside of the hierarchy  */}
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        // pointer to the id in the index.html page
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </Wrapper>
  );
};

export default Modal;
