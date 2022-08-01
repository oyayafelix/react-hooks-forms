import React, { useState } from "react";
import DisplayData from "./DisplayData";
import Form from "./Form"

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(e){
    setFirstName(e.target.value)
  }
  function handleLastNameChange(e){
    setLastName(e.target.value)
  }

  return (
    <div>
        <Form
            handleFirstNameChange={handleFirstNameChange} 
            firstName={firstName}
            handleLastNameChange={handleLastNameChange} 
            lastName={lastName}
        />
        <DisplayData firstName={firstName} lastName={lastName}/>
    </div>
  );
}

export default ParentComponent;