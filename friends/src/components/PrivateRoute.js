import React from "react";
import {Redirect} from "react-router-dom";

export function PrivateRoute(Component, props) {
    console.log("you are hitting private route", props);
    if (window.localStorage.getItem('token')) {
      return <Component {...props} />
    }
    return <Redirect to='/' />;
  }

