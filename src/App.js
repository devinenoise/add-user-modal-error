import React, { useState } from 'react';
import Wrapper from './components/Helpers/Wrapper';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  // initializing the state with an empty array
  const [usersList, setUsersList] = useState([]);

  // handler looks for a username and age argument
  const addUserHandler = (userName, userAge) => {
    setUsersList(prevUsersList => {
      return [
        // spreads the prevUsers state and insert a name,age,id into the array
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() }
      ];
    });
  };

  return (
    <Wrapper>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Wrapper>
  );
}

export default App;
