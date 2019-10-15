import React from "react";
import {Redirect} from "react-router-dom";

export function PrivateRoute(Component,props,...other) {
    console.log("you are hitting private route", props);
    if (window.localStorage.getItem('token')) {
      return <Component  {...props} {...other} />
    }
    return <Redirect to='/' />;
  }

