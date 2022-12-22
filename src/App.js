import { useState,Fragment } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {
    setUsersList([...usersList, { name, age, id: Math.random().toString() }]);
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length>0 && <UsersList users={usersList} />}
    </Fragment>
  );
}

export default App;
