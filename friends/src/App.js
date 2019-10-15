import React, { useState } from "react";
import {Route} from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import {PrivateRoute} from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

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
    <Route  exact path="/" render={props =>  <Login {...props}
        loginUser={loginUser}
        formValues={formValues}
        valueChange={valueChange}
    /> }/>
      <Route exact path="/friends" render = {props => PrivateRoute(FriendsList,props) }/>
    </div>
  );
};

export default App;
