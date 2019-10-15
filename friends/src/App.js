import React, { useState } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";

let friendsArr, setFriends;

const App = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: ""
  });
  const [friendFormValues, setFriendFormValues] = useState({
    id: "",
    name: "",
    age: "",
    email: ""
  });

  
  const [friendsArray, setFriendsArray] = useState([]);

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
      <Route
        exact
        path="/"
        render={props => (
          <Login
            {...props}
            loginUser={loginUser}
            formValues={formValues}
            valueChange={valueChange}
          />
        )}
      />
      <Route
        path="/friends"
        render={props =>  PrivateRoute(FriendsList, props,
          friendsArr={friendsArray}
          ,setFriends={setFriendsArray}
          )}
      />
       <Route
         exact path="/friends/add"
        render={props =>
          <FriendForm
          setFriendsArray={setFriendsArray}
            friendFormValues={friendFormValues}
            setFriendFormValues={setFriendFormValues}
            {...props}
          />
         }
      />
       
    </div>
  );
};

export default App;
