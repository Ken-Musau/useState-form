import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {

  const [stateName, setStateName] = useState('kennedy')

  const name2 = "Mary";


  function onclickHandler() {
    setStateName(name2)
  }
  return (
    <>
      <button onClick={onclickHandler}>{stateName}</button>
      <Form />
    </>
  );
}

export default App;
