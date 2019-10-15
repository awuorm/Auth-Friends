import React from "react";
import {NavLink} from "react-router-dom";


const Friend = (props) => {
    console.log("props from Friend", props);
    const { friend } = props;


    return (
        <div key={friend.id}>
           <NavLink to={`/friends/${friend.id}`}>My friend's name is {friend.name}, his/her age is {friend.age} and email is {friend.email}</NavLink>
        </div>
    )
}

export default Friend;