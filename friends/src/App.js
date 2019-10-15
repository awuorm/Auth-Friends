import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: ""
  });
  const valueChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const loginUser = e => {
    e.preventDefault();
    console.log("form values", formValues);
  };
  return (
    <div className="App">
      Hello from App!
      <Login
        loginUser={loginUser}
        formValues={formValues}
        valueChange={valueChange}
      />
      <PrivateRoute />
    </div>
  );
};

export default App;
