import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";
import Wrapper from "../helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const enteredUsername = nameInputRef.current.value;
  console.log(nameInputRef.current);
  const enteredAge = ageInputRef.current.value;
  const [error, seterror] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      seterror({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      //that plus converts the string into a number
      seterror({
        title: "Invalid Input",
        message: "Please enter a valid age",
      });
      return;
    }
    props.onAddUsder(enteredUsername, enteredAge);
    //this is not that bad don't do it a lot it's quite ok for this use case
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    seterror(null);
  };
  //this wrapper just returns the children of the body and is just a wrapper
  //this wont be visible in the dom.
  //after using refs we dont need state managment with all the name and age variables
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">Username</label>
          {/* these html elements are uncontrolled as the value in not controlled by react */}
          <input id="userName" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          {/* the state is not controlled by React unlike the value and onchange state approach
          at that point we had controll over the internal state via React */}
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit" onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

//limitations of jsx
// two jsx elements cant be returned with a return statement so no more than one root jsx element
// it's like js because vanila js can only return one element via return statement.
// temporary solution is wrapping inside a div.
