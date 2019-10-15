import React from "react";



const Friend = (props) => {
    console.log("props from Friend", props);
    const { friend } = props;


    return (
        <div key={friend.id}>
           <h5>My friend's name is {friend.name}, his/her age is {friend.age} and email is {friend.email}</h5>
        </div>
    )
}

export default Friend;