import React, { useState } from "react";

function Form() {
  // const obj = {};
  // const newObj = { ...obj, b: 2, c: 3 };
  // console.log(newObj);
  // const inputs1 = {};
  // const newInputs1 = { ...inputs1, username: "ken" };
  // console.log(newInputs1);

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
  });

  function onChangeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((inputs) => {
      ({ ...inputs, [name]: value });
    });
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    return alert(`My names are: ${inputs}`);
  }

  return (
    <div>
      <form action="">
        <label htmlFor="firstname">FirstName:</label>
        <input
          onChange={onChangeHandler}
          type="text"
          id="firstname"
          name="firstname"
        />
        <br />
        <label htmlFor="lastname">lastname</label>
        <input onChange={onChangeHandler} type="lastname" name="lastname" />
        <br />
        <button onClick={onSubmitHandler}>submit</button>
      </form>
    </div>
  );
}
