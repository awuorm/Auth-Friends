import React from "react";
import axios from "axios";

const Login = props => {
  const { valueChange, loginUser, formValues } = props;
  const submitUserDetails = e => {
    e.preventDefault();
    console.log("formValue from button", formValues);
    axios
      .post("http://localhost:5000/api/login", formValues)
      .then(res => {
        console.log("response from server", res);
      })
      .catch(err => {
        console.log("error from server", err.message);
      });
  };

  return (
    <div>
      <h4>Login</h4>
      <form>
        <label>Username</label>
        <input
          onChange={valueChange}
          value={formValues.username}
          name="username"
          type="text"
        />
        <label>Password</label>
        <input
          onChange={valueChange}
          value={formValues.password}
          name="password"
          type="password"
        />
        <button onClick={submitUserDetails}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
