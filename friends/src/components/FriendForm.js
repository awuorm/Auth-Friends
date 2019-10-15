import React from "react";
import axios from "axios";
import Axios from "axios";
import axiosWithAuth from "../axios/axiosWithAuth";

const FriendForm = props => {
  const {  setFriendFormValues, setFriendsArray, friendFormValues } = props;

  const submitUserDetails = e => {
    e.preventDefault();
    console.log("formValue from button", friendFormValues);
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", friendFormValues)
      .then(res => {
        console.log("response from server", res);
        setFriendsArray(res.data);
      })
      .catch(err => {
        alert("error from server", err.message);
      });
  };

  const valueChange = e => {
    setFriendFormValues({ ...friendFormValues, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h4>Login</h4>
      <form>
        <label>Name</label>
        <input
          onChange={valueChange}
          value={friendFormValues.name}
          name="name"
          type="text"
        />
         <label>Age</label>
        <input
          onChange={valueChange}
          value={friendFormValues.age}
          name="age"
          type="text"
        />
        <label>Email</label>
        <input
          onChange={valueChange}
          value={friendFormValues.email}
          name="email"
          type="text"
        />
        <label>ID</label>
        <input
          onChange={valueChange}
          value={friendFormValues.id}
          name="id"
          type="text"
        />
        <button onClick={submitUserDetails}>Submit</button>
      </form>
    </div>
  );
};

export default FriendForm;
