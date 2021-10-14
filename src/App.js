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
  // React fragment is kinda of a built in wrapper
  // Portals improve the dom and improve the accessibility and semantics
  return (
    <React.Fragment>
      <AddUser onAddUsder={addUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
