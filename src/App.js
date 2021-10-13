import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setusersList] = useState([]);
  const addUserHandler = (uName, uAge, key) => {
    setusersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, key: Math.random() }];
    });
  };
  return (
    <div>
      <AddUser onAddUsder={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
