import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserListHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString()},
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserListHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
