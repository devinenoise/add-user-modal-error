import React, { useState } from 'react';
import Card from '../UI/Card';
import Modal from '../UI/Modal';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = event => {
    event.preventDefault();
    // checking if the input is empty
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Username/Age inputs cannot be blank'
      });
      return;
    }
    // checking if age is above 1 and ensuring it is a number
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age'
      });
      return;
    }
    // props is passed down from App.js to send the username and age to lift the state
    props.onAddUser(enteredUsername, enteredAge);
    // reset the input field to a blank string for two-way binding
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = event => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {/* conditional to check if there is an error, and if so display the Modal */}
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
