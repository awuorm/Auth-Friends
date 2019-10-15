import React, { useEffect, useState } from "react";
import axiosWithAuth from "../axios/axiosWithAuth";
import { NavLink, Route } from "react-router-dom";

import Friend from "./Friend";
import FriendForm from "./FriendForm";

const FriendsList = props => {
  console.log("props from FriendsList", props);
  const propValues = Object.values(props);
  console.log("props from FriendsList2", propValues[1].setFriendsArray);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        console.log("response from friends endpoint", res);
        propValues[1].setFriendsArray(res.data);
      })
      .catch(err => {
        console.log("err from friends endpoint", err.message);
      });
  }, []);

  return (
    <div>
      {propValues[0].friendsArray.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
      <NavLink to="/friends/add">Add Friends</NavLink>
    </div>
  );
};

export default FriendsList;
