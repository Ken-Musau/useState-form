import React, { useState } from "react";

function Form() {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    alert(`My name is: ${inputs.firstName} ${inputs.lastName}`);
  }

  return (
    <div>
      <form action="">
        <label htmlFor="firstname">FirstName:</label>
        <input
          onChange={handleChange}
          type="text"
          id="firstname"
          name="firstName"
          value={inputs.firstName}
        />
        <br />
        <label htmlFor="lastname">Last Name:</label>
        <input
          onChange={handleChange}
          type="text"
          name="lastName"
          value={inputs.lastName}
        />
        <br />
        <button onClick={onSubmitHandler}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
